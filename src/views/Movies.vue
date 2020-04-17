<template>
  <div class="movies">
    <div class="movies__header">
      <h1>Peliculas</h1>
      <v-btn rounded color="primary" dark>+ Crear nueva película</v-btn>
    </div>
    <movies-modal></movies-modal>
    <reservation-modal></reservation-modal>
    <section class="movies__container">
      <div
        class="card_container"
        v-for="movie in movies"
        :key="movie.id">
        <v-img :src="movie.image">
        </v-img>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import ReservationModal from '@/components/ReservationModal.vue'
import MoviesModal from '@/components/MoviesModal.vue'
import MoviesCard from '@/components/MoviesCard.vue'

export default {
  components: {
    ReservationModal,
    MoviesModal,
    MoviesCard,
  },
  data(){
    return{
      movies:[]
    }
  },
  methods:{
    createMovie(){

    },
    createReserve(){

    },
  },
  mounted(){
    this.$http.get("http://localhost:3000/api/v1/movies/index").then((response) => {
      this.movies = response.data;
    }).catch( error => {
      console.log(error);
    });
  }
}

</script>
