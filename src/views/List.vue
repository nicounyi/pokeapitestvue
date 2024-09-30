<template>
  <div class="listContainer">
    <div class="content">
      <div>
        <SearchBar :pokemons="pokemons" @updateSearchResults="updateSearchResults" />

        <div class="notFoundItem" v-if="noResults">
          <h1>Uh-oh!</h1>
          <p>You look lost on your journey!</p>
        </div>


        <ul v-else-if="filteredPokemons.length">
          <li v-for="pokemon in filteredPokemons" :key="pokemon.name" class="itemList">
            <span @click="openModal(pokemon.name)">{{ pokemon.name }}</span>
            <button v-if="!isFavorite(pokemon)" @click="addToFavorites(pokemon)"><img
                src="@/assets/img/addfavorites.png" alt="Add favorites" /></button>
            <button v-else @click="removeFromFavorites(pokemon)"><img src="@/assets/img/removefavorites.png"
                alt="Remove favorites" /></button>
          </li>
        </ul>

        <Loader v-else />

        <PokemonModal :isVisible="isModalVisible" :pokemonName="selectedPokemon" @close="closeModal"
          @updateFavorites="updateFavorites" />
      </div>
    </div>

  </div>
  <NavBar v-if="!isModalVisible" />
</template>
<style></style>
<script>
import NavBar from '@/components/NavBar.vue'
import SearchBar from '@/components/SearchBar.vue'
import PokemonModal from '@/components/PokemonModal.vue'
import Loader from '@/components/Loader.vue'
import axios from 'axios'

export default {
  components: {
    NavBar,
    SearchBar,
    PokemonModal,
    Loader
  },
  data() {
    return {
      pokemons: [],
      filteredPokemons: [],
      favorites: [],
      noResults: false,
      isModalVisible: false,
      selectedPokemon: ''
    }
  },
  created() {
    this.fetchPokemons()
    this.loadFavorites()
  },
  methods: {
    async fetchPokemons() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
        this.pokemons = response.data.results
        this.filteredPokemons = this.pokemons
      } catch (error) {
        console.error('Error', error)
      }
    },
    loadFavorites() {
      const savedFavorites = localStorage.getItem('favorites')
      if (savedFavorites) {
        this.favorites = JSON.parse(savedFavorites)
      }
    },
    addToFavorites(pokemon) {
      this.favorites.push(pokemon)
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
    removeFromFavorites(pokemon) {
      this.favorites = this.favorites.filter(fav => fav.name !== pokemon.name)
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
    isFavorite(pokemon) {
      return this.favorites.some(fav => fav.name === pokemon.name)
    },
    updateSearchResults(results) {
      this.filteredPokemons = results
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
    },
    updateFavorites(favorites) {
      this.favorites = favorites;
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }
}
</script>
