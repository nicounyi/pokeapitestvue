<template>
  <div v-if="isVisible" class="modalOverlay">
    <div class="modalContent">
      <button @click="closeModal" class="closeModal"><img src="@/assets/img/close.png" alt="Close Modal" /></button>
      <div class="modalImgBk">
        <img :src="pokemonImg" class="pokemonImg" />

      </div>
      <div class="detailsList">
        <p style="text-transform: capitalize;"><span>Name:</span> {{ pokemonData.name }}</p>
        <p>
          <strong>Weight:</strong> {{ pokemonData.weight }}
        </p>
        <p>
          <strong>Height:</strong> {{ pokemonData.height }}
        </p>
        <p>
          <strong>Types:</strong>
          <span v-if="pokemonData && pokemonData.types">
            {{ pokemonData.types.map(type => type.type.name).join(', ') }}
          </span>
          <span v-else>No types available</span>
        </p>


      </div>
      <div class="detailsButtons">
        <button @click="sharePokemon" class="button buttonRed">Share to my friends</button>
        <button v-if="!isFavorite" class="buttonFavoritesModal" @click="addToFavorites"><img
            src="@/assets/img/addfavorites.png" alt="Add favorites" /></button>
        <button v-else @click="removeFromFavorites" class="buttonFavoritesModal"><img
            src="@/assets/img/removefavorites.png" alt="Remove favorites" /></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: Boolean,
    pokemonName: String
  },
  data() {
    return {
      pokemonData: {},
      pokemonImg: "",
      favorites: JSON.parse(localStorage.getItem('favorites')) || [],
      isFavorite: false
    }
  },
  watch: {
    pokemonName: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          this.fetchPokemonData(newValue);
        }
      }
    }
  },
  methods: {
    async fetchPokemonData(name) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        this.pokemonData = data;
        this.pokemonImg = data.sprites.other.dream_world.front_default
        this.checkIfFavorite();
      } catch (error) {
        console.error('Error al obtener la información del Pokémon:', error);
      }
    },
    closeModal() {
      this.pokemonData = {};
      this.pokemonImg = "";
      this.$emit('close');
    },
    sharePokemon() {
      const textToCopy = `${this.pokemonData.name}, ${this.pokemonData.weight}, ${this.pokemonData.height}, ${this.pokemonData.types.map(type => type.type.name).join(', ')}`;
      navigator.clipboard.writeText(textToCopy);
    },
    addToFavorites() {
      this.favorites.push({ name: this.pokemonData.name, url: this.pokemonData.url });
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      this.isFavorite = true;
    },
    removeFromFavorites() {
      this.favorites = this.favorites.filter(fav => fav.name !== this.pokemonData.name);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      this.isFavorite = false;
    },
    checkIfFavorite() {
      this.favorites = JSON.parse(localStorage.getItem('favorites'));
      this.isFavorite = this.favorites.some(fav => fav.name === this.pokemonData.name);
    }
  }
}
</script>

<style scoped>
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modalContent {
  background-color: white;
  border-radius: 8px;
  width: 80vw;
  text-align: center;
  position: relative;
}

.modalImgBk {
  background-image: url(../assets/img/bkPokeimg.jpg);
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.pokemonImg {
  display: block;
  max-width: 180px;
  height: auto
}

.closeModal {
  position: absolute;
  right: 15px;
  top: 15px;
  border: 0;
  background-color: transparent
}

.detailsButtons {
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
}

.buttonFavoritesModal {
  border: 0;
  background: transparent;
  box-shadow: none;
}

.detailsList {
  text-align: left;
  padding: 10px 25px;
}

.detailsList p {
  border-bottom: 1px solid var(--color-ligth-grey);
  padding-bottom: 10px;
}

.detailsList p span {
  text-transform: capitalize;
}

@media (min-width: 1100px) {
  .modalImgBk {
    background-size: contain
  }

  .detailsButtons {
    padding: 15px 50px;
  }
}
</style>
