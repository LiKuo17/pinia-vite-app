import {defineStore} from 'pinia'
import {Names} from './store-name'


export const useTestStore = defineStore(Names.TEST, {
    state: ()=>{
        return {
            current:121,
            name: "小李111"
        }
    },

    //类似于computed 修饰一些值
    getters: {},


    //methods 可以做同步 异步都可以做 提交state
    actions:{
        setCurrent() {
            this.current = 999
        }

    }
})


