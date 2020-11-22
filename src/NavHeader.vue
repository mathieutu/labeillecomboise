<template>
  <nav
    class="fixed top-0 z-10 w-full transition-colors duration-500 ease-in-out hidden md:block px-10 text-sm"
    :class="showHeader ? 'bg-white text-gray-600 shadow' : 'text-orange-200'"
  >
    <div class="flex items-center justify-between w-full py-2 mx-auto mt-0">
      <div
        class="flex items-center pl-4 transition-opacity duration-500 ease-in-out"
        :class="{'opacity-0': !showHeader}"
      >
        <img alt="" class="h-16" src="/img/logo_mathias.png">
      </div>

      <ul class="flex items-center gap-6">
        <li v-for="{title, link} in links" :key="title">
          <a :class="showHeader ? 'hover:text-gray-900' : 'hover:text-orange-900'" :href="link">
            {{ title }}
          </a>
        </li>
        <li class="flex">
          <button
            class="snipcart-checkout inline-flex gap-1 items-center"
            :class="showHeader ? 'hover:text-gray-900' : 'hover:text-orange-900'"
          >
            <svg
              class="h-5 "
              viewBox="0 0 64 64"
              fill="none"
            ><path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z"
              fill="currentColor"
            /></svg>
            <span class="snipcart-items-count snipcart__font--secondary" />
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

import { computed, defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'NavHeader',
  setup() {
    const currentScrollPosition = ref(0)
    const navRef = ref()

    const onScroll = () => {
      currentScrollPosition.value = window.pageYOffset || document.documentElement.scrollTop
    }
    onMounted(() => {
      window.addEventListener('scroll', onScroll)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', onScroll)
    })

    const showHeader = computed(() => currentScrollPosition.value > 200)

    const links = [
      { title: 'L\'abeille Comboise', link: '#abeille' },
      { title: 'Boutique', link: '#boutique' },
      { title: 'Distributeurs', link: '#distributeurs' },
      { title: 'Contact', link: '#contact' },
    ]
    return {
      showHeader,
      links,
      navRef,
    }
  },
})
</script>
