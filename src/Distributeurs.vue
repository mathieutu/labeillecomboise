<template>
  <section id="distributeurs" class="py-8 bg-white">
    <div class="container flex flex-wrap pt-4 pb-12 mx-auto">
      <h1 class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800 sm:text-6xl font-hand">
        Les distributeurs
      </h1>
      <div class="w-full mb-4">
        <div
          class="w-64 h-1 py-0 mx-auto my-0 rounded-full opacity-25 bg-gradient-to-r from-red-800 via-orange-500 to-yellow-500"
        />
      </div>
      <div class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid gap-12 row-gap-8 lg:grid-cols-2">
          <ul class="grid gap-2 sm:grid-cols-2">
            <li
              v-for="(distributeur, i) in distributeurs"
              :key="i"
              :class="{
                'bg-orange-100 border-orange-200': distributeurIndex.clicked === i,
                'bg-orange-50 border-orange-100': distributeurIndex.hovered === i,
              }"
              class="rounded pl-3 py-2 border border-transparent"
              @click="handleDistributeurSelection('click', i)"
              @mouseleave="handleDistributeurSelection('blur', i)"
              @mouseover="handleDistributeurSelection('hover', i)"
            >
              <p class="mb-2 font-semibold leading-5">
                <a
                  v-if="distributeur.url"
                  :href="distributeur.url"
                  class="hover:underline"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  {{ distributeur.nom }}
                </a>
                <span v-else>
                  {{ distributeur.nom }}
                </span>
              </p>
              <div class="text-sm text-gray-600">
                <div v-if="distributeur.tel">
                  <dt class="sr-only">
                    Numéro de téléphone
                  </dt>
                  <dd class="inline-flex gap-2 items-center">
                    <!-- Heroicon name: phone -->
                    <a :href="`tel:${distributeur.tel}`" class="hover:underline">
                      <svg
                        class="flex-shrink-0 w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </svg>
                    </a>
                    {{ distributeur.tel }}
                  </dd>
                </div>
                <div v-if="distributeur.adresse">
                  <dt class="sr-only">
                    Adresse postale
                  </dt>
                  <dd class="inline-flex items-center gap-2">
                    <!-- Heroicon name: location-marker -->
                    <a
                      :href="`https://www.google.com/maps/place/${encodeURIComponent(distributeur.adresse)}`"
                      class="hover:underline"
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        class="flex-shrink-0 h-4 w-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <path
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </svg>
                    </a>
                    {{ distributeur.adresse }}
                  </dd>
                </div>
                <div v-if="distributeur.horaires">
                  <dt class="sr-only">
                    Horaires
                  </dt>
                  <dd class="inline-flex items-center gap-2">
                    <!-- Heroicon name: clock -->
                    <svg
                      class="flex-shrink-0 h-4 w-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </svg>
                    <span>
                      {{ distributeur.horaires }}
                    </span>
                  </dd>
                </div>
              </div>
            </li>
          </ul>
          <DistributeursMap
            :distributeurIndex="distributeurIndex"
            @distributeurSelected="({type, index}) => handleDistributeurSelection(type, index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import DistributeursMap from './DistributeursMap.vue'
import distributeurs from './data/distributeurs'

import { reactive } from 'vue'

export default {
  name: 'Distributeurs',
  components: { DistributeursMap },
  setup() {
    const distributeurIndex = reactive({
      hovered: null,
      clicked: null,
    })

    const handleDistributeurSelection = (type, index) => {
      if (type === 'click') {
        if (distributeurIndex.clicked === index) {
          return distributeurIndex.clicked = null
        }

        return distributeurIndex.clicked = index
      }

      return distributeurIndex.hovered = type === 'hover' ? index : null
    }

    return {
      distributeurs,
      distributeurIndex,
      handleDistributeurSelection,
    }
  },
}
</script>
