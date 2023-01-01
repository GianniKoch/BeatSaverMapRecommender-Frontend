<script>
    export let type = 'error';
    export let message = 'Map or difficulty not found!';
</script>

<div class="alert alert-{type}">
    <div>
        <span>{message}</span>
    </div>
</div>