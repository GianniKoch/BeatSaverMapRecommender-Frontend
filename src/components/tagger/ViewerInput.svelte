<script lang="ts">
    export let mapId: string;
    export let time: number;
</script>

<div class="card card-body -mt-5">
    <div class="form-control w-full">
        <label class="label">
            <span class="label-text">BeatSaver Id</span>
        </label>
        <input type="text" placeholder="Type here" class="input input-bordered"
               bind:value={mapId}/>
    </div>
    <div class="form-control w-full">
        <label class="label">
            <span class="label-text">Time in seconds</span>
        </label>
        <input type="number" placeholder="Type here" class="input input-bordered"
               bind:value={time}/>
    </div>
</div>