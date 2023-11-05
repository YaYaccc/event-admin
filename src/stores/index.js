import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

export const pinia = createPinia() // 创建实例

pinia.use(persist)

// import { useUserStore } from '@/stores/modules/user'
// export { useUserStore }

export * from '@/stores/modules/user'
