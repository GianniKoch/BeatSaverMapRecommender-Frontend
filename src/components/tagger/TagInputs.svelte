<script lang="ts">
    import TagInput from "./TagInput.svelte";
    import {setSectionTags} from "../../services/RecommendationBackendService";
    import {to_number} from "svelte/internal";

    export let mapId: string;
    export let time: number;
    export let loadNextSection = () => {
    };

    const onSubmit = async (e) => {
        const formData = new FormData(e.target);

        const tags = [];
        for (let field of formData) {
            const [tag, value] = field;
            tags.push({tag, value: to_number(value)});
        }
        await setSectionTags(mapId, time, tags)
        loadNextSection()
    }

    const tags = ["TrueAcc", "Acc", "TechAcc", "Dance", "Fitness", "Tech", "SpeedTech", "Balanced",
        "MidSpeed", "Speed", "HighSpeed", "Challenge", "Meme"];
</script>

<form class="grid grid-cols-2 gap-2 px-5" on:submit|preventDefault={onSubmit}>
    {#each tags as tagLabel}
        <TagInput {tagLabel} class="col"/>
    {/each}
    <div class="col mx-4">
        <button class="btn btn-outline w-full">Set Tag Values</button>
    </div>
</form>