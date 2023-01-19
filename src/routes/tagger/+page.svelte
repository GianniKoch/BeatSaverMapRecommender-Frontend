<script lang="ts">
    import BeatSaberViewer from "../../components/tagger/BeatSaberViewer.svelte";
    import ViewerInput from "../../components/tagger/ViewerInput.svelte";
    import TagInput from "../../components/tagger/TagInputs.svelte";
    import {getNextSection} from "../../services/RecommendationBackendService";

    let mapId: string;
    let time: number;

    const loadNextSection = async () => {
        [mapId, time] = await getNextSection()
    }

    loadNextSection()
</script>

<div class="grid grid-cols-3">
    <div class="col col-span-2">
        <BeatSaberViewer {mapId} {time}/>
    </div>
    <div class="col">
        <ViewerInput bind:mapId bind:time/>
        <hr/>
        <TagInput {mapId} {time} {loadNextSection} />
    </div>
</div>