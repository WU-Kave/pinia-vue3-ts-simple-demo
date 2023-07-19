import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', {
    state: () => {
        return {
            name: '小猪课堂',
            age: 25,
            sex: '男'
        }
    },
    getters: {
        getAddAge: (state) => {
            return (num: number) => state.age + num
        },
        getNameAndAge(): string {
            return this.name + this.getAddAge(100) // 调用其它 getter
        }
    },
    actions: {
        saveName(name: string) {
            this.name = name
        }
    }
}) 
