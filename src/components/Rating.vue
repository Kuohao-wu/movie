<template>
   <div class="rating">
      <small>{{ rate }}</small>
      <span class="stars">
         <template v-for="star in starArr" :key="star">
            <i :class="setStarIcon(star)" ></i>
         </template>
      </span>
   </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  rate: number;
}>();

const starArr = ref<string[]>([]);

// 初始化星星数组
const initStarArray = () => {
  let maxStar = 5;
  const mainNum = props.rate * 0.5;
  const lowerNum = Math.floor(mainNum);
  const upperNum = lowerNum + 1;

  for (let i = 1; i <= lowerNum; i++) {
    starArr.value.push('full');
  }
  maxStar -= lowerNum;

  if (mainNum > lowerNum && mainNum < upperNum) {
    starArr.value.push('half');
    maxStar -= 1;
  }

  for (let i = 1; i <= maxStar; i++) {
    starArr.value.push('empty');
  }
};

// 设置星星图标
const setStarIcon = (str: string) => {
  if (str === 'full') return 'fas fa-star';
  else if (str === 'half') return 'fas fa-star-half';
  else return 'far fa-star';
};

// 监听 rate 变化并更新星星数组
watch(() => props.rate, () => {
  starArr.value = [];
  initStarArray();
});

// 组件挂载时初始化星星数组
initStarArray();
</script>

<style lang="scss">
   
   @import './src/scss/_variabels';
   @import './src/scss/_mixins';
   
   .rating {
      
      small {
         @include poppins-style(600, rgba($text-secondary, .85));
         margin-right: .25rem;
         font-size: .6rem;
         
         @media only screen and (min-width: 40.063em) and (max-width: 120em) {
            font-size: 1.1rem;
            margin-right: .45rem;
         } /* min-width 641px and max-width 1024px, use when QAing tablet-only issues */
      }
      
      .stars {
         i {
            font-size: .55rem;
            color: $text-icon;
            
            @media only screen and (min-width: 40.063em) and (max-width: 120em) {
               font-size: 1.05rem;
            } /* min-width 641px and max-width 1024px, use when QAing tablet-only issues */
         }
      }
   }
   
</style>