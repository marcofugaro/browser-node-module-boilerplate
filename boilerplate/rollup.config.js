import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import bundleSize from 'rollup-plugin-bundle-size'
import pkg from './package.json'

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: '<%= camelModuleName %>',
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify(),
    bundleSize(),
  ],
  dest: pkg.main,
}
