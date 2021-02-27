import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import multi from '@rollup/plugin-multi-entry'
import { terser } from 'rollup-plugin-terser'

export default {
  input: {
    include: ['src/*.ts'],
    exclude: ['src/*.d.ts']
  },
  output: [{
    dir: './npm/lib',
    format: 'cjs',
    exports: 'auto'
  }],
  plugins: [multi(), typescript(), resolve(), terser(), commonjs()],
}
