<template>
  <div class="searchContainer">
    <img src="@/assets/img/lupa.png" alt="Search" class="searchIcon" />
    <input v-model="searchQuery" @input="search" class="inputSearch" placeholder="Search" />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    pokemons: Array,
  },
  data() {
    return {
      searchQuery: '',
      noResults: false,
    };
  },
  methods: {
    search() {
      const searchResults = this.pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.noResults = searchResults.length === 0;
      this.$emit('updateSearchResults', searchResults);
    },
  },
};
</script>

<style scoped>
.searchContainer {
  position: relative;
  width: 100%;
}

.searchIcon {
  position: absolute;
  left: 10px;
  top: 35%;
  transform: translateY(-50%);
  pointer-events: none;
}

.inputSearch {
  padding: 10px 10px 10px 40px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  border: 0;
  box-shadow: 0px 2px 10px 0px #0000000A;
}
</style>
