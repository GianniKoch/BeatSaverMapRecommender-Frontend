<script lang="ts">
import BeatSaberViewer from "../../components/tagger/BeatSaberViewer.svelte";
import ViewerInput from "../../components/tagger/ViewerInput.svelte";
import TagInput from "../../components/tagger/TagInputs.svelte";

let mapId: string;
let time: number;
</script>

<div class="grid grid-cols-3">
    <!--    Create a half of max width container for an iframe with full height-->
    <div class="col col-span-2">
        <BeatSaberViewer {mapId} {time}/>
    </div>
    <div class="col">
        <ViewerInput bind:mapId bind:time/>
        <hr/>
        <TagInput {mapId} {time}/>
    </div>
</div>