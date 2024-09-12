<template>
  <div class="card">
    <img :src="poster" alt="poster" />
    <div class="card-footer">
      <router-link :to="'/details/' + idMovie">
        <h3>{{ title }}</h3>
      </router-link>
      <small>{{ year + " | " + $t('common.' + type) }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">

defineOptions({ name: 'Card' })

// 定义 Props 接口
interface IProps {
  title: string;
  year: string;
  type: string;
  idMovie?: string; // 可选属性
  poster: string;
}

withDefaults(
  defineProps<IProps>(),
   {
    title: 'Iron Man 3',
    year: '2013',
    type: 'Movie',
    idMovie: '',
    poster: 'src/assets/poster.jpeg'
  }
);

</script>

<style lang="scss">
@import './src/scss/_card';
</style>