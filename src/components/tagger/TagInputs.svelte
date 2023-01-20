<script lang="ts">
    import TagInput from "./TagInput.svelte";
    import {setSectionTags} from "../../services/RecommendationBackendService";
    import {to_number} from "svelte/internal";

    export let tags: string[];
    export let mapId: string;
    export let time: number;
    export let loadNextSection = () => {};

    function refreshTags() {
        const old = tags;
        tags = [];
        setTimeout(() => tags = old, 1);
    }

    let onSubmit = async (e) => {
        const formData = new FormData(e.target);

        const values = [];
        for (let field of formData) {
            const [tag, value] = field;
            values.push({tag, value: to_number(value)});
        }

        await setSectionTags(mapId, time, values);

        await loadNextSection();

        refreshTags();
    }

</script>

<form class="grid grid-cols-2 gap-2 px-5" on:submit|preventDefault={onSubmit}>
    {#each tags as tagLabel}
        <TagInput {tagLabel} class="col"/>
    {/each}
    <div class="col mx-4">
        <button class="btn btn-outline w-full">Set Tag Values</button>
    </div>
</form>