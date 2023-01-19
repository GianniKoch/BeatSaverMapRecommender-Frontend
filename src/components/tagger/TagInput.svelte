<script lang="ts">
    export let tagLabel: string;
</script>


<div class="form-control">
    <label class="label">
        <span class="label-text text-md">{tagLabel}</span>
    </label>
    <input type="range" name={tagLabel} min="0" max="100" value="0" class="range range-sm" step="20"/>
</div>