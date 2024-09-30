<template>
  <div class="helloContainer">
    <div class="content">
      <div class="imgHello">
        <img src="../assets/img/hello.png" class="homeImg" alt="Pikachu hello" />
      </div>

      <div class="textHello">
        <h1>Welcome to Pokédex</h1>
        <p>The digital encyclopedia created by Professor Oak is an invaluable tool<br class="onlyDesktop" /> to Trainers
          in the Pokémon world.</p>
        <button @click="goToList" class="button buttonHome buttonRed">Get started</button>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'Index',
  methods: {
    goToList() {
      this.$router.push('/list')
    }
  }
}
</script>

<style scoped>
.helloContainer {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content {
  width: 80vw;
}

.imgHello {
  width: 100%;
  height: auto;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-bottom: 4rem;
}

.textHello {
  width: 100%;
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

.textHello h1 {
  font-size: 26px;
  color: var(--color-dark-grey);
  font-weight: 700;
  margin-bottom: 2rem;
}

.textHello p {
  color: var(--color-medium-grey);
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 2rem;
}
.buttonHome {
  max-width: 150px;
      margin: 0 auto;
}
</style>