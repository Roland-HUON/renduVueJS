import { createRouter, createWebHistory } from 'vue-router'
import JournalView from '../views/JournalView.vue'
import ContactView from '../views/ContactView.vue'
import AppelView from '../views/AppelView.vue'
import AddContactView from '../views/AddContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'journal',
      component: JournalView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/appel',
      name: 'appel',
      component: AppelView
    },
    {
      path: '/addContact',
      name: 'addcontact',
      component: AddContactView
    },
  ]
})

export default router
