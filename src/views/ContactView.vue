<script>
import { useAddContactStore } from '@/stores/addContact'
  export default{
    name: 'ContactView',
    setup(){
        const personneStore = useAddContactStore()
        return{
          personneStore,
        }
    },
    computed:{
        contacts(){
            return this.personneStore.personnes
        }
    },
    methods:{
        adds(){
            window.location.href = "/addContact"
        }
    }
}
</script>

<template>
  <div class="contact-global-content">
    <button @click="adds()">+</button>
    <div class="contact-single" v-for="contact in contacts">
      <h2>{{ contact.nom }}</h2>
      <p>{{ contact.number }}</p>
      <img src="../assets/appel-icon.png" alt="appel icon">
    </div>
  </div>
</template>

<style scoped>
  .contact-global-content{
    position: relative;
    border: 3px solid rgb(245, 155, 20);
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .contact-single{
    display: flex;
    flex-direction: column;
  }
  .name{
    align-items: flex-start;
  }
  .number{
    align-items: center;
  }
  .phone{
    align-items: flex-end;
  }
  button{
    position: absolute;
    top: 50px;
    right: 0;
  }
  h2{
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    color: black;
    letter-spacing: 1.04px;
  }
  p{
    font-size: 20px;
    font-weight: 500;
    color: rgba(74, 73, 73, 0.797);
    letter-spacing: 1.04px;
  }
  img{
    width: 10%;
  }
</style>
