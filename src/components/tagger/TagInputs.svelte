<script lang="ts">
    import TagInput from "./TagInput.svelte";

    export let mapId: string;
    export let time: number;
    const tags = ["TrueAcc", "Acc", "TechAcc", "Dance", "Fitness", "Tech", "SpeedTech", "Balanced",
        "MidSpeed", "Speed", "HighSpeed", "Challenge", "Meme"];
</script>

<div class="grid grid-cols-2 gap-2 px-5">
    {#each tags as tagLabel}
        <TagInput {tagLabel} class="col"/>
    {/each}
    <div class="col mx-4">
        <button class="btn btn-outline w-full">Set Tag Values</button>
    </div>
</div>