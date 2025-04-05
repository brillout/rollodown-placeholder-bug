import { plugin as vike } from 'vike/plugin'
import vikeSolid from 'vike-solid/vite'
import type { UserConfig } from 'vite'

export default {
  root: 'src',
  plugins: [
    vike(),
    vikeSolid()
  ],
  server: {
    port: 3000
  }
} satisfies UserConfig
