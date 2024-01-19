<script>
import {useClavierStore} from '@/stores/clavier'
import {useAddContactStore} from '@/stores/addContact'
import { useJournalStore } from '@/stores/journal'

export default{
  name: 'ClavierView',
  setup(){
    const clavierStore = useClavierStore()
    const personneStore = useAddContactStore()
    const journalStore = useJournalStore()
    return{
      clavierStore,
      personneStore,
      journalStore,
    }
  },
  computed:{
    number(){
      return this.clavierStore.clavierText
    },
    errorMessage() {
      return this.clavierStore.errorMessage;
    },
    Friendsname(){
      const person = this.personneStore.personnes.find(p=> p.number === this.number)
      if(person){
        return person.nom
      }
    }
  },
  methods:{
    addNumber(number){
      this.clavierStore.incrementClavier(number)
    },
    call(){
      this.journalStore.appel({ call: this.displayName, date: new Date() })
      this.clavierStore.resetClavier()
    }
  }
}
</script>

<template>
  <div class="clavier-global-conteneur">
    <div class="clavier-first-content">
      <div class="number-input">
        <p>{{ number }}</p>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
      <div class="name-contact-find">
        <p>{{ Friendsname }}</p>
      </div>
    </div>
    <div class="clavier-second-content">
      <div class="number-inputed" @click="addNumber(1)">
        <p>1</p>
      </div>
      <div class="number-inputed" @click="addNumber(2)">
        <p>2</p>
        <p>abc</p>
      </div>
      <div class="number-inputed" @click="addNumber(3)">
        <p>3</p>
        <p>def</p>
      </div>
      <div class="number-inputed" @click="addNumber(4)">
        <p>4</p>
        <p>ghi</p>
      </div>
      <div class="number-inputed" @click="addNumber(5)">
        <p>5</p>
        <p>jkl</p>
      </div>
      <div class="number-inputed" @click="addNumber(6)">
        <p>6</p>
        <p>mno</p>
      </div>
      <div class="number-inputed" @click="addNumber(7)">
        <p>7</p>
        <p>pqrs</p>
      </div>
      <div class="number-inputed" @click="addNumber(8)">
        <p>8</p>
        <p>tuv</p>
      </div>
      <div class="number-inputed" @click="addNumber(9)">
        <p>9</p>
        <p>wxyz</p>
      </div>
      <div class="number-inputed">
        <p>*</p>
      </div>
      <div class="number-inputed" @click="addNumber(0)">
        <p>0</p>
      </div>
      <div class="number-inputed">
        <p>#</p>
      </div>
      <img src="../assets/appel-icon.png" alt="appel icon" @click="call()">
    </div>
  </div>
</template>

<style scoped>
  .clavier-second-content{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
  }
  .number-inputed{
    width: 50%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    background-color: grey;
    justify-items: center;
  }
  .number-inputed p{
    font-size: 24px;
    font-weight: bold;
    color: white;
  }
  .clavier-second-content img{
    width: 10%;
    grid-column: 1/-1;
  }
</style>
