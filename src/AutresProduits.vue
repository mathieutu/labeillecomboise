<template>
  <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
      <div class="space-y-5 sm:space-y-4">
        <h2 id="autres-produits" class="text-2xl font-extrabold leading-9 tracking-tight text-gray-700 sm:text-3xl">
          Autres produits de la Ruche
        </h2>
        <p class="text-xl italic leading-7 text-gray-500">
          Les produits de la ruche à base de cire proviennent intégralement de mes hausses,
          où il n'y a ni couvain ni traitement.<br>
          Articles uniquement en vente directe.
        </p>
      </div>
      <div class="lg:col-span-2">
        <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
          <li v-for="produit in produits" :key="produit.titre">
            <div class="space-y-4">
              <div class="relative pb-full">
                <img
                  :src="`/img/produits/${produit.img}`"
                  :alt="`Photo de ${produit.titre}`"
                  class="absolute object-cover object-center w-full h-full rounded-lg shadow-lg"
                  :class="{'opacity-50': produit.plusEnStock}"
                >
                <span
                  v-if="produit.plusEnStock"
                  class="absolute bottom-0 right-0 px-2 py-px m-2 text-sm font-semibold text-red-800 bg-white rounded"
                >
                  Victime de son succès
                </span>
              </div>
              <div :class="{'opacity-50': produit.plusEnStock}">
                <div class="space-y-1 text-lg font-medium leading-6">
                  <div class="flex items-baseline justify-between">
                    <h4 :style="{ color: produit.color }" class="text-3xl font-hand">
                      {{ produit.titre }}
                    </h4>
                    <span class="text-sm text-gray-600">
                      {{ produit.prix }}&nbsp;€ / {{ produit.quantite }}
                    </span>
                  </div>
                  <p class="text-gray-600">
                    {{ produit.provenance }}
                  </p>
                </div>
                <p class="text-base leading-7 text-gray-500" v-html="produit.description" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

import produits from './data/autres-produits.json'

export default {
  name: 'AutresProduits',
  setup() {
    return {
      produits: produits.filter(({ masquer }) => !masquer),
    }
  },
}
</script>
