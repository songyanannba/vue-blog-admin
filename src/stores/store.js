import { defineStore } from 'pinia'

export const useStore = defineStore('gvb' , {
    state:() => {
        return {
            theme:true
        }
    },

    actions:{
        //切换主题
        setTheme ( ) {
            this.theme = !this.theme
            if (this.theme) {
                //白天 
                document.documentElement.classList.remove("dark")
                localStorage.setItem("theme" , "light")
            } else {
                //黑夜
                document.documentElement.classList.add("dark")
                localStorage.setItem("theme" , "dark")
            }
        },

        //加载主题
        loadTheme() {
            const theme = localStorage.getItem("theme")
            console.log(theme)

            if (theme === "dark") {
                this.theme = false
                document.documentElement.classList.add("dark")
                return
            } 
            
            this.theme = true
            //document.documentElement.classList.add("dark")
        }
    }
})