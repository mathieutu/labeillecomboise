<template>
  <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
      <div class="space-y-5 sm:space-y-4">
        <h2 id="produits" class="text-2xl font-extrabold leading-9 tracking-tight text-gray-700 sm:text-3xl">
          {{ title }}
        </h2>
        <p class="text-xl italic leading-7 text-gray-500">
          {{ description }}
        </p>
      </div>
      <div class="lg:col-span-2">
        <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0">
          <li
            v-for="miel in miels"
            :id="miel.id"
            :key="miel.id"
          >
            <div
              class="group block text-left space-y-4 rounded-lg border-transparent border p-3"
            >
              <div class="relative pb-full">
                <img
                  :src="miel.img"
                  :alt="`Photo d'un pot de ${miel.titre}`"
                  class="absolute object-cover object-center w-full h-full rounded-lg shadow-lg"
                  :class="{'opacity-50': miel.rupture}"
                >
                <span
                  v-if="miel.rupture"
                  class="absolute bottom-0 right-0 px-2 py-px m-2 text-xs font-light text-gray-400 bg-white rounded"
                >
                  Victime de son succès
                </span>
              </div>
              <div :class="{'opacity-50': miel.rupture}">
                <div class="space-y-1 text-lg font-medium leading-6">
                  <div class="flex items-baseline justify-between">
                    <h4 :style="{ color: miel.color }" class="text-3xl font-hand">
                      {{ miel.titre }}
                    </h4>
                    <span class="text-sm text-gray-600">
                      {{ miel.prix }}&nbsp;€ / {{ miel.quantite }}
                    </span>
                  </div>
                  <p class="text-gray-600">
                    {{ miel.provenance }}
                  </p>
                </div>
                <p class="text-base leading-7 text-gray-500">
                  {{ miel.description }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { description, miels, title } from './data/miels'


  export default {
    name: 'Miels',
    setup() {
      return {
        title, description, miels,
      }
    },
  }
</script>
