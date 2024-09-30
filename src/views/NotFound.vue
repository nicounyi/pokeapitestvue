<template>
    <div class="notFound">
        <h1>Uh-oh!</h1>
        <p>You look lost on your journey!</p>
        <button @click="$router.push('/list')" class="button buttonRed">
            Go back home
        </button>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style scoped>
.notFound {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>