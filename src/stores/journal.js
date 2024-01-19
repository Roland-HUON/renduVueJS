import {defineStore} from "pinia"

export const useJournalStore = defineStore('phone', {
    state:()=>({
        callsText : [
            {
                nom:'06 57 74 37 82',
                date: "2021-10-10 10:10:10",
            },
            {
              nom:'Gérard',
              date: "2021-10-10 10:10:10",
            }, 
            {
              nom:'Estéban',
              date: "2021-10-10 10:10:10",
            }
          ],
    }),
    actions:{
        appel(phone){
            this.callsText.push(phone)
        }
    }
})