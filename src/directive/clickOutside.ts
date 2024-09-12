import { DirectiveBinding } from 'vue';

type CustomHTMLelement = HTMLElement & {
  __vueClickOutside__?: any;
}

// click-outside.directive.js
const clickOutside = {
  mounted(el: CustomHTMLelement, binding: DirectiveBinding) {
    function eventHandler(e: MouseEvent) {
      
      if (!(e.target as Node).contains(el)) {
          return false
      }
      // 如果绑定的参数是函数，正常情况也应该是函数，执行
      if (binding.value && typeof binding.value === 'function') {
          binding.value(e)
      }
  }
  // 用于销毁前注销事件监听
    el.__vueClickOutside__ = eventHandler
    // 添加事件监听
    document.addEventListener('click', eventHandler)
  },
  unmounted(el:CustomHTMLelement, binding: DirectiveBinding) {
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
};

export default clickOutside;