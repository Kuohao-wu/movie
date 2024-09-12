<template>
  <Nav :nav-name="$t('details.navName')" />
  <Waiting :is-waiting="isWaiting" />
  <section v-if="!isWaiting" class="details">
    <div class="details-main-info">
      <img :src="movie.Poster" :alt="movie.Title" />
      <strong>{{ movie.Title }}</strong>
      <div class="details-flex">
        <p>{{ movie.Year }} • {{ movie.Genre }} • {{ movie.Runtime }}</p>
      </div>
      <Rating :rate="parseFloat(movie.Rating)" />
    </div>
    <div class="details-opt-info">
      <p>{{ $t('details.plot') }}</p>
      <p>{{ movie.Plot }}</p>
      <p>{{ $t('details.actors') }} & {{ $t('details.production') }}</p>
      <p>{{ movie.Actors }} • {{ movie.Production }}</p>
    </div>
    <Button :details-movie="movie" />
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue';
import Nav from '../components/Nav.vue';
import Rating from '../components/Rating.vue';
import Button from '../components/Button.vue';
import Waiting from '../components/Waiting.vue';
import { apiGetMovieDetail } from "@/api/index";
import { useRoute } from "vue-router";

const route = useRoute()


defineOptions({
  name: 'Details'
});

interface Movie {
  IdMovie?: string;
  Poster: string;
  Title: string;
  Year: string;
  Genre: string;
  Runtime: string;
  Rating: string;
  Plot: string;
  Production: string;
  Actors: string;
  Type: string;
}

const isWaiting = ref(true);
const movie = reactive<Movie>({
  Poster: '',
  Title: '',
  Year: '',
  Genre: '',
  Runtime: '',
  Rating: '',
  Plot: '',
  Production: '',
  Actors: '',
  Type: ''
});

const getDetail = async () => {
  try {
    const { data } = await apiGetMovieDetail({ i: route.params.idMovie as string })
    const { imdbID, Poster, Title, Genre, Year, Runtime, imdbRating, Plot, Production, Actors, Type } = data
      movie.IdMovie = imdbID;
      movie.Poster = Poster;
      movie.Title = Title;
      movie.Year = Year;
      movie.Genre = Genre;
      movie.Runtime = Runtime;
      movie.Rating = imdbRating;
      movie.Plot = Plot;
      movie.Production = Production;
      movie.Actors = Actors;
      movie.Type = Type;

      isWaiting.value = false;
  } catch (err) {
    console.error('', err) 
  }
}

onMounted(() => {
  getDetail()
});

</script>

<style lang="scss">
  @import "./src/scss/view-styles/_details";
</style>