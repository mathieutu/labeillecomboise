<template>
  <div ref="mapRef" class="h-full w-full z-0 rounded-lg" style="min-height: 20rem" />
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue'

import distributeurs from './data/distributeurs.json'

export default defineComponent({
  name: 'DistributeursMap',
  props: {
    distributeurIndex: {
      type: Object,
      required: true,
    },
  },
  emits: ['distributeurSelected'],
  setup(props, { emit }) {
    const mapRef = ref({})

    onMounted(async () => {
      const L = await import('leaflet/dist/leaflet-src.esm.js')

      const osmLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      })

      const markerIcon = L.divIcon({
        iconSize: 35,
        className: 'bg-white rounded-full border border-orange-300 flex-important justify-center items-center',
        html: `
    <svg class="h-6 w-6" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
      <g>
        <path class="text-orange-400" fill="currentColor" d="M547.69,286.8a102.1,102.1,0,0,0,16.4-3.6V480a32,32,0,0,1-32,32H84a32,32,0,0,1-32-32V283.2a125.89,125.89,0,0,0,16.4,3.6,135.49,135.49,0,0,0,18,1.2,132.81,132.81,0,0,0,29.51-3.8V384H500V284.2a127.12,127.12,0,0,0,29.51,3.8A138.38,138.38,0,0,0,547.69,286.8Z"></path>
        <path class="text-orange-600" fill="currentColor" d="M602,118.6c33.6,53.6,3.8,128-59,136.4a102.9,102.9,0,0,1-13.7.9,99.08,99.08,0,0,1-73.81-33.1A98.83,98.83,0,0,1,316,230.88a96.26,96.26,0,0,1-8.08-8.08,98.9,98.9,0,0,1-139.62,8,97.4,97.4,0,0,1-8-8,98.75,98.75,0,0,1-73.81,33.1,104.6,104.6,0,0,1-13.7-.9C10.12,246.5-19.58,172.1,14,118.6L78.83,15A32,32,0,0,1,106,0H510a32,32,0,0,1,27.07,15Z"></path>
      </g>
    </svg>
  `,
      })

      const markers = distributeurs.map(({ latLng }) => L.marker(latLng, { icon: markerIcon }))

      const mapObject = L.map(mapRef.value, { scrollWheelZoom: false })

      mapObject.addLayer(osmLayer)

      markers.forEach((marker, index) => {
        marker.addTo(mapObject)
        marker.on('click', () => emit('distributeurSelected', { type: 'click', index }))
        marker.on('mouseout', () => emit('distributeurSelected', { type: 'blur', index }))
        marker.on('mouseover', () => emit('distributeurSelected', { type: 'hover', index }))
      })

      const findBestZoom = (markersToFocus) => {
        mapObject.fitBounds(L.featureGroup(markersToFocus).getBounds().pad(0.2), { animate: true })
      }

      watch(
        () => props.distributeurIndex.clicked,
        clicked => findBestZoom(clicked === null ? markers : [markers[clicked]]),
        { immediate: true },
      )

      watch(
        props.distributeurIndex,
        ({ clicked, hovered }) => {
          markers.forEach((marker, markerIndex) => {
            if (hovered === null && clicked === null) {
              return marker.setOpacity(1).setZIndexOffset(0)
            }

            if (clicked === markerIndex || hovered === markerIndex) {
              return marker.setOpacity(1).setZIndexOffset(1000)
            }

            return marker.setOpacity(0.3).setZIndexOffset(0)
          })
        },
        { immediate: true },
      )
    })

    onBeforeUnmount(() => {
      mapRef.value?.remove()
    })

    return {
      mapRef,
    }
  },
})
</script>
<style src="leaflet/dist/leaflet.css" />
<style>
.flex-important {
    @apply flex !important;
}
</style>
