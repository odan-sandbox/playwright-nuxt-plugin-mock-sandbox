import { Plugin } from '@nuxt/types'

type User = {
  login(): string
}

declare module 'vue/types/vue' {
  interface Vue {
    $user: User
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $user: User
  }
}

const userPlugin: Plugin = (_, inject) => {
  const user: User = {
    login() {
      return 'hello'
    },
  }
  inject('user', user)
}

export default userPlugin
