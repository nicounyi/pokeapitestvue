<template>
  <div class="listContainer">
    <div class="content">

      <SearchBar :pokemons="favorites" @updateSearchResults="updateSearchResults" />


      <div class="notFoundItem" v-if="noResults">
        <h1>Uh-oh!</h1>
        <p>You look lost on your journey!</p>
      </div>

      <ul v-else-if="filteredFavorites.length">
        <li v-for="pokemon in filteredFavorites" :key="pokemon.name" class="itemList">
          <span @click="openModal(pokemon.name)">{{ pokemon.name }}</span>
          <button @click="removeFromFavorites(pokemon)"><img src="@/assets/img/removefavorites.png"
              alt="Remove favorites" /></button>
        </li>
      </ul>

      <p v-else>No tienes Pokémon en favoritos.</p>

      <PokemonModal v-if="isModalVisible" :isVisible="isModalVisible" :pokemonName="selectedPokemon" @close="closeModal"
        @updateFavorites="updateFavorites" />
    </div>
  </div>
  <NavBar v-if="!isModalVisible" />

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SearchBar from '@/components/SearchBar.vue'
import PokemonModal from '@/components/PokemonModal.vue'

export default {
  components: {
    NavBar,
    SearchBar,
    PokemonModal
  },
  data() {
    return {
      favorites: [],
      filteredFavorites: [],
      noResults: false,
      isModalVisible: false,
      selectedPokemon: ''
    }
  },
  created() {
    this.loadFavorites()
  },
  methods: {
    loadFavorites() {
      const savedFavorites = localStorage.getItem('favorites')
      if (savedFavorites) {
        this.favorites = JSON.parse(savedFavorites)
        this.filteredFavorites = this.favorites
      }
    },
    removeFromFavorites(pokemon) {
      this.favorites = this.favorites.filter(fav => fav.name !== pokemon.name)
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
      this.updateSearchResults(this.favorites)
    },
    updateSearchResults(results) {
      this.filteredFavorites = results
      this.noResults = results.length === 0
    },
    openModal(name) {
      this.selectedPokemon = name
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
      this.selectedPokemon = ''
      this.loadFavorites();
    }
  }
}
</script>
