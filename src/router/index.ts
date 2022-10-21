import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/landing',
    name: 'home-view',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu-view',
    component: () => import('../views/MenuView.vue'),
  },
  {
    path: '/kdipk',
    name: 'kdipk-view',
    component: () => import('../views/KDIPKView.vue'),
  },
  {
    path: '/kd',
    name: 'kd-view',
    component: () => import('../views/KDView.vue'),
  },
  {
    path: '/ipk',
    name: 'ipk-view',
    component: () => import('../views/IPKView.vue'),
  },
  {
    path: '/profil',
    name: 'profil-view',
    component: () => import('../views/ProfileView.vue'),
  },
  {
    path: '/video',
    name: 'video-view',
    component: () => import('../views/VideoView.vue'),
  },

  {
    path: '/video2',
    name: 'video2-view',
    component: () => import('../views/VideoView2.vue'),
  },
  {
    path: '/materi',
    name: 'materi-view',
    component: () => import('../views/MateriView.vue'),
  },
  {
    path: '/book/:id',
    name: 'book-view',
    component: () => import('../views/BookView.vue'),
  },
  {
    path: '/game',
    name: 'game-view',
    component: () => import('../views/GameView.vue'),
  },
  {
    path: '/ready/:id',
    name: 'ready-view',
    component: () => import('../views/ReadyView.vue'),
  },

  {
    path: '/quiz/:id',
    name: 'quiz-view',
    component: () => import('../views/QuizView.vue'),
  },
  {
    path: '/result/:id/:value',
    name: 'result-view',
    component: () => import('../views/ResultView.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// router.afterEach((to, from) => {
//   setTimeout(() => {
//     const before = document
//       .querySelector(".ion-page");
//     const main = document
//       .querySelector(".ion-page.ion-page-hidden");

//     if (main) {
//       main.classList.remove("ion-page-hidden");
//     }
//     if (before) {
//       before.classList.add("ion-page-hidden");
//     }
//   }, 100);
// })


export default router
