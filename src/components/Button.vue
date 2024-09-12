<template>
   <section class="button-bookmark">
      <div class="button-bookmark-wrapper">
         <button 
            :disabled="isBookmark"
            @click="pushToBookmark" 
            class="button-bookmark-main" type="button">
            <template v-if="isBookmark">
               {{ $t('components.button.saved') }}
            </template>
            <template v-else>
               {{ $t('components.button.bookmark') }}
            </template>
         </button>
         <button @click="sharePage" class="button-share" type="button">
            <i class="fa fa-share-alt"></i>
         </button>
      </div>
   </section>
</template>

<script lang="ts" setup>
import { IBookMarkCache } from '@/types/bookmark';
import { ref, onMounted } from 'vue';
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const { t: $t } = useI18n()

// 定义props类型
interface IProps {
   detailsMovie: {
      Poster?: string;
      Title?: string;
      Year?: string;
      Type?: string;
      IdMovie?: string;
   };
}

const route = useRoute()

defineOptions({
   name: 'Button'
})

// 定义props
const props = withDefaults(defineProps<IProps>(), {
   detailsMovie: () => ({})
});

// 定义响应式状态
const movie = ref({});

/**
 * 是否已经存在书签
 */
const isBookmark = ref(false);

// 推送到书签的方法
const pushToBookmark = () => {
   let localStr = localStorage.getItem('listBookmark_omdb');
   const details = props.detailsMovie;

   movie.value = {
      ...movie.value,
      Poster: details.Poster,
      Title: details.Title,
      Year: details.Year,
      Type: details.Type,
      IdMovie: details.IdMovie
   };

   if (localStr) {
      const localInfo = JSON.parse(localStr);

      if (!isDuplicate(localInfo, movie.value)) {
         localInfo.bookmark.push(movie.value);
         localStorage.setItem('listBookmark_omdb', JSON.stringify(localInfo));
      }
   } else {
      localStorage.setItem('listBookmark_omdb', JSON.stringify({ bookmark: [movie.value] }));
   }

   isBookmark.value = true;
};

// 检查是否重复的方法
const isDuplicate = (local: any, movie: any) => {
   return local.bookmark.some((item: { IdMovie: string; }) => item.IdMovie === movie.IdMovie);
};

// 分享页面的方法
const sharePage = () => {
   if (navigator.share) {
      navigator.share({
         title: `${$t('components.button.shareText')} | ${props.detailsMovie.Title}`,
         url: ''
      }).then(result => {
         console.log(result);
      }).catch(err => {
         console.error(err);
      });
   }
};

const getData = () => {
   const id = route.params.idMovie as string;
   const localStr = localStorage.getItem('listBookmark_omdb');

   if (localStr) {
      const localInfo:IBookMarkCache = JSON.parse(localStr);
      isBookmark.value = localInfo.bookmark.some((item: { IdMovie: string; }) => item.IdMovie === id);
   }
}

// 生命周期钩子
onMounted(() => {
   getData()
});
</script>

<style lang="scss">
@import './src/scss/_button';
</style>