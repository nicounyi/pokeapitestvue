<template>
  <nav class="floatNav">
    <button @click="$router.push('/list')"
      :class="{ 'buttonRed': isActive('/list'), 'buttonGrey': !isActive('/list'), 'button': true }">
      <img src="@/assets/img/list.png" alt="List Icon" class="button-icon" />
      List
    </button>
    <button @click="$router.push('/favorites')"
      :class="{ 'buttonRed': isActive('/favorites'), 'buttonGrey': !isActive('/favorites'), 'button': true }">
      <img src="@/assets/img/favorites.png" alt="Favorites Icon" class="button-icon" />
      Favorites
    </button>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    isActive() {
      return (path) => {
        return this.$route.path === path;
      };
    }
  }
}
</script>

<style>
.floatNav {
  position: fixed;
  height: 70px;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--color-white);
  box-shadow: 0px -5px 4px 0px #0000000D;
  padding: 10px 0px;
}

nav {
  display: flex;
  gap: 10px;
}


.button {
  display: flex;
  align-items: center;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  justify-content: center;
}

.button-icon {
  width: 22px;
  height: 22px;
  margin-right: 8px;
}
</style>