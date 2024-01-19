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
    <div class="contact-part">
      <div class="contact-single" v-for="contact in contacts">
        <h2>{{ contact.nom }}</h2>
        <p>{{ contact.number }}</p>
        <img src="../assets/appel-icon.png" alt="appel icon">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .contact-global-content{
    position: relative;
    border: 3px solid rgb(245, 155, 20);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .contact-single{
    display: flex;
    justify-content: space-between;
  }
  button{
    width: 50px;
    height: auto;
    background-color: orange;
    align-self: end;
    font-size: 24px;
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
    width: 5%;
  }
</style>
