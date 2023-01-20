<script lang="ts">
    import BeatSaberViewer from "../../components/tagger/BeatSaberViewer.svelte";
    import ViewerInput from "../../components/tagger/ViewerInput.svelte";
    import TagInput from "../../components/tagger/TagInputs.svelte";
    import {getNextSection, getTags} from "../../services/RecommendationBackendService";
    import {onMount} from 'svelte';
    import {SpinLine} from "svelte-loading-spinners";
    import {fade, blur} from "svelte/transition";

    let tags: [] = [];
    let mapId: string;
    let time: number;


    const loadNextSection = async () => {
        tags = [];

        let section = await getNextSection()
        mapId = section.beatMapId;
        time = section.startTime;

        tags = await getTags();
    }

    onMount(async () => {
        loadNextSection()
    });
</script>

{#if tags.length > 0}
    <div class="grid grid-cols-3" transition:fade={{duration: 250}}>
        <div class="col col-span-2">
            <BeatSaberViewer {mapId} {time}/>
        </div>
        <div class="col">
            <ViewerInput bind:mapId bind:time/>
            <hr/>
            <TagInput {tags} {mapId} {time} {loadNextSection}/>
        </div>
    </div>
{:else}
    <div class="grid h-screen place-items-center" transition:fade={{duration: 250}}>
        <div>
            <SpinLine size="60" color="#efefef" unit="px"/>
            <p class="mt-8">Loading...</p>
        </div>
    </div>
{/if}