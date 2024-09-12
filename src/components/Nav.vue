<template>
   <section class="nav">
      <div @click="$router.go(-1)" class="nav-back">
         <i class="fa fa-chevron-left" ></i>
         <strong>{{ $t('components.nav.back') }}</strong>
      </div>
      <strong class="nav-title">
         {{ navName }}
      </strong>
   </section>
</template>

<script lang="ts" setup>
   
   defineOptions({
      name: 'Nav',
      inheritAttrs: false
   })

   interface IProps {
      navName: string;
   }

   withDefaults(
      defineProps<IProps>(),
      {
         navName: 'Nav'
      }
   )

</script>

<style lang="scss">
   
   @import "./src/scss/_nav";
   
</style>