<script>
    import Toasts from "../components/Toasts.svelte";
    import {getRecommendation, idToChar, idToDiff} from "../services/RecommendationBackendService.js";
    import {env} from "$env/dynamic/public";
    import PrivacyNotice from "../components/PrivacyNotice.svelte";

    let recommendations = undefined
    let addToastChild

    let song_id = "1af89"
    let difficulty
    let characteristic


    async function loadRecommendations() {
        try {
            recommendations = await getRecommendation(song_id, difficulty, characteristic, 200, 4)
        } catch (e) {
            console.log(e)
            addToastChild("error", "Map not found in dataset!")
            recommendations = undefined
        }
    }

</script>

<div class="container">
    <div class="grid {recommendations === undefined ? 'h-screen place-items-center': 'justify-center mt-6'}">
        <div class="card card-bordered card-body bg-base-200">
            <div class="flex items-stretch justify-center mb-7">
                <figure class="h-12 w-12 xl:h-20 xl:w-20"><img src="leftnote.webp" alt="Logo"/></figure>
                <div class="flex flex-col justify-center">
                    <h1 class="text-xl xl:text-4xl font-bold"><a href="{env.PUBLIC_BEATSAVER_URL}" target="_blank">BeatSaver</a> Recommender</h1>
                </div>
                <figure class="h-12 w-12 xl:h-20 xl:w-20"><img src="rightnote.webp" alt="Logo"/></figure>
            </div>
            <div class="form-control">
                <label class="input-group input-group-lg hidden xl:flex justify-center">
                    <span class="font-semibold">BeatSaver Key</span>
                    <input type="text" placeholder="Type here" class="input input-bordered input-lg font-semibold"
                           bind:value={song_id} on:change={loadRecommendations}/>
                    <span class="font-semibold">Characteristic</span>
                    <select bind:value={characteristic} class="select select-bordered select-lg font-semibold"
                            on:change={loadRecommendations}>
                        <option value="0">Standard</option>
                        <option value="1">OneSaber</option>
                        <option value="2">NoArrows</option>
                        <option value="3">90Degree</option>
                        <option value="4">360Degree</option>
                        <option value="5">Lightshow</option>
                        <option value="6">Lawless</option>
                    </select>
                    <span class="font-semibold">Difficulty</span>
                    <select bind:value={difficulty} class="select select-bordered select-lg font-semibold"
                            on:change={loadRecommendations}>
                        <option value="0">Easy</option>
                        <option value="1">Normal</option>
                        <option value="2">Hard</option>
                        <option value="3">Expert</option>
                        <option value="4">Expert+</option>
                    </select>
                </label>


                <label class="input-group input-group-md flex xl:hidden mb-7">
                    <span class="font-semibold">BeatSaver Key</span>
                    <input bind:value={song_id} type="text" placeholder="Type here"
                           class="input input-bordered input-md font-semibold"
                           on:change={loadRecommendations}/>
                </label>
                <label class="input-group input-group-md flex xl:hidden mb-7">
                    <span class="font-semibold">Characteristic</span>
                    <select bind:value={characteristic} class="select select-bordered select-md font-semibold"
                            on:change={loadRecommendations}>
                        <option value="0">Standard</option>
                        <option value="1">OneSaber</option>
                        <option value="2">NoArrows</option>
                        <option value="3">90Degree</option>
                        <option value="4">360Degree</option>
                        <option value="5">Lightshow</option>
                        <option value="6">Lawless</option>
                    </select>
                    <span class="font-semibold">Difficulty</span>
                    <select bind:value={difficulty} class="select select-bordered select-md font-semibold"
                            on:change={loadRecommendations}>
                        <option value="0">Easy</option>
                        <option value="1">Normal</option>
                        <option value="2">Hard</option>
                        <option value="3">Expert</option>
                        <option value="4">Expert+</option>
                    </select>
                </label>
            </div>
        </div>

        {#if recommendations !== undefined}
            <div class="grid lg:grid-cols-2 gap-6 mt-6">
                {#each recommendations as recommendation}
                    <div class="col card card-side bg-base-200 shadow-xl">
                        <!--                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>-->
                        <div class="absolute top-8 right-8 flex space-x-2">
                            <span class="badge badge-primary badge-lg font-semibold p-4">{idToChar(recommendation.characteristic)}</span>
                            <span class="badge badge-secondary badge-lg font-semibold p-4">{idToDiff(recommendation.difficulty)}</span>
                        </div>
                        <div class="card-body">
                            <div>
                                <a href="{env.PUBLIC_BEATSAVER_MAPS_URL}{recommendation.song_id}"
                                   class="btn justify-start text-xl" target="_blank"><img
                                        src="https://beatsaver.com/static/favicon/favicon.ico"
                                        class="h-5 w-5 mr-4"># {recommendation.song_id}</a>
                            </div>
                            <div class="mt-6">
                                <div class="stats stats-horizontal shadow">

                                    <div class="stat">
                                        <div class="stat-title">Tag Similarity</div>
                                        <div class="">{Math.round(recommendation.tag_sim * 100)}%</div>
                                    </div>

                                    <div class="stat">
                                        <div class="stat-title">Metadata Similarity</div>
                                        <div class="">{Math.round(recommendation.meta_sim * 100)}%</div>
                                    </div>

                                    <div class="stat">
                                        <div class="stat-title">Total Similarity</div>
                                        <div class="">{Math.round(recommendation.total_sim * 100)}%</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}

    </div>
    <Toasts bind:addToast={addToastChild}/>
    <PrivacyNotice/>
</div>