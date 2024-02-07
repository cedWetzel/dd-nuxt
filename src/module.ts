import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { defu } from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'dd-nuxt',
    configKey: 'ddNuxt'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)
    addPlugin(resolver.resolve('./runtime/plugin.server'))

    nuxt.options.runtimeConfig.public.ddNuxt = defu(nuxt.options.runtimeConfig.public.ddNuxt, {
      apiKey: options.apiKey,
      serviceName: options.serviceName,
      host: options.host,
    })

  }
})
