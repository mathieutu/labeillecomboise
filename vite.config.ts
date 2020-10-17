import { UserConfig } from 'vite'

const config: UserConfig = {
  optimizeDeps: {
    include: ['leaflet/dist/leaflet-src.esm.js']
  }
}

export default config
