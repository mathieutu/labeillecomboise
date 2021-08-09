import { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const config: UserConfig = {
  plugins: [vue()],
  optimizeDeps: {
    include: ['leaflet/dist/leaflet-src.esm.js']
  }
}

export default config
