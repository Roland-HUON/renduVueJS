<script>
import { useAddContactStore } from '@/stores/addContact'
  export default{
    name : 'addContact',
    setup(){
        const personneStore = useAddContactStore()
        return{
          personneStore,
        }
    },
    data(){
      return{
        perso : {
          nom :'',
          number: ''
        },
      }
    },
    methods:{
      ajoutPerso(){
        this.personneStore.ajoutPersonne(this.perso)
        this.perso = {
          nom:'',
          number:''
        }
      }
    }
  }
</script>

<template>
  <div class="addContact-global-content">
    <form @submit.prevent="ajoutPerso()">
      <div class="adding">
        <h2>Nom</h2>
        <input type="text" v-model="perso.nom">
      </div>
      <div class="adding">
        <h2>Numéro</h2>
        <input type="number" v-model="perso.number">
      </div>
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<style scoped>
  .addContact-global-content{
    border: 3px solid rgb(245, 155, 20);
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    gap: 60px;
  }
  .adding:first-child{
    justify-content: center;
  }
  .adding{
    display: flex;
    flex-direction: column;
  }
  input{
    align-self: flex-start;
    border: none;
    border-bottom: 2px solid rgb(245, 155, 20);
    width: 140%;
  }
  button{
    border: 3px solid rgb(255, 115, 0);
    background-color: rgb(245, 155, 20);
    width: 30%;
    height: 30%;
    font-size: 24px;
  }
</style>
