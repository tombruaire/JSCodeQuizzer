import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuestionView from '@/views/QuestionView.vue'
import ScoreView from '@/views/ScoreView.vue'
import LoginView from '@/views/admin/LoginView.vue'
import DashboardView from '@/views/admin/DashboardView.vue'
import QuestionsView from '@/views/admin/QuestionsView.vue'
import UsersView from '@/views/admin/UsersView.vue'
import AllQuestionsVue from '@/components/AllQuestions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/question",
      name: "question",
      component: QuestionView
    },
    {
      path: "/questions",
      name: "questions",
      component: AllQuestionsVue
    },
    {
      path: "/score",
      name: "score",
      component: ScoreView
    },
    {
      path: "/admin/login",
      name: "admin-login",
      component: LoginView
    },
    {
      path: "/admin/dashboard",
      name: "admin-dashboard",
      component: DashboardView
    },
    {
      path: "/admin/users",
      name: "admin-users",
      component: UsersView
    },
    {
      path: "/admin/questions",
      name: "admin-questions",
      component: QuestionsView
    }
  ]
})

export default router
