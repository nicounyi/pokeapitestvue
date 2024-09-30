<template>
    <div class="loaderContainer">
        <img src="@/assets/img/loader.png" class="rotate" alt="loader" />
    </div>
</template>

<script>
export default {
    name: 'Loader'
}
</script>

<style>
.loaderContainer {
    width: 100%;
    height: 80vh;
    justify-content: center;
    display: flex;
    align-items: center;
}

.rotate {
    display: inline-block;
    animation: spin 2s linear infinite;
    width: 106px;
    height: 106px;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>