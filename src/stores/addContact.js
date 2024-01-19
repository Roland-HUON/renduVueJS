import {defineStore} from "pinia"

export const useAddContactStore = defineStore('personne', {
    state:()=>({
        personnes : [
            {
              nom:'Gérard',
              number:'08 08 08 08 08'
            }, 
            {
              nom:'Silvie',
              number:'07 07 07 07 07'
            },
            {
              nom:'Estéban',
              number:'06 06 06 06 06'
            }
          ],
    }),
    actions:{
        ajoutPersonne(personne){
            this.personnes.push(personne)
        }
    }
})