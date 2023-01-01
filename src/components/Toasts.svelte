<script>
    import Toast from "./Toast.svelte";

    let toasts = [];
    export const addToast = (type, message) => {

        const toast = {
            type,
            message
        };

        toasts.push(toast);
        toasts = toasts

        setTimeout(() => {
            const index = toasts.indexOf(toast);
            toasts.splice(index, 1);
            toasts = toasts
        }, 3000);
    }
</script>

<div id="toasts" class="toast">
    {#each toasts as toast}
        <Toast type={toast.type} message={toast.message}/>
    {/each}
</div>