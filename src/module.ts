import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

export interface ModuleOptions {}

export default <any>defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'element-plus',
    configKey: 'elementPlus',
  },
  hooks: {
    'vite:extendConfig': function (config) {
      config.plugins ||= []
      config.plugins.push(ElementPlus())
      config.optimizeDeps ||= {}
      config.optimizeDeps.include ||= []
      config.optimizeDeps.include.push(
        'dayjs',
        'dayjs/dayjs.min.js',
        'dayjs/plugin/advancedFormat.js',
        'dayjs/plugin/arraySupport.js',
        'dayjs/plugin/badMutable.js',
        'dayjs/plugin/bigIntSupport.js',
        'dayjs/plugin/buddhistEra.js',
        'dayjs/plugin/calendar.js',
        'dayjs/plugin/customParseFormat.js',
        'dayjs/plugin/dayOfYear.js',
        'dayjs/plugin/devHelper.js',
        'dayjs/plugin/duration.js',
        'dayjs/plugin/isBetween.js',
        'dayjs/plugin/isLeapYear.js',
        'dayjs/plugin/isSameOrAfter.js',
        'dayjs/plugin/isSameOrBefore.js',
        'dayjs/plugin/isToday.js',
        'dayjs/plugin/isTomorrow.js',
        'dayjs/plugin/isYesterday.js',
        'dayjs/plugin/localeData.js',
        'dayjs/plugin/localizedFormat.js',
        'dayjs/plugin/minMax.js',
        'dayjs/plugin/objectSupport.js',
        'dayjs/plugin/pluralGetSet.js',
        'dayjs/plugin/preParsePostFormat.js',
        'dayjs/plugin/quarterOfYear.js',
        'dayjs/plugin/relativeTime.js',
        'dayjs/plugin/timezone.js',
        'dayjs/plugin/toArray.js',
        'dayjs/plugin/toObject.js',
        'dayjs/plugin/updateLocale.js',
        'dayjs/plugin/utc.js',
        'dayjs/plugin/weekday.js',
        'dayjs/plugin/weekOfYear.js',
        'dayjs/plugin/weekYear.js',
        'escape-html'
      )
    },
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.build.transpile.push('element-plus')
    nuxt.options.css.unshift('element-plus/dist/index.css')
    nuxt.options.css.unshift('element-plus/theme-chalk/index.css')
    nuxt.options.css.unshift('element-plus/theme-chalk/dark/css-vars.css')
    addPlugin(resolve(runtimeDir, 'plugin'))
  },
})
