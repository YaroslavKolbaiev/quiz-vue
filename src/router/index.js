import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import QuizView from "../views/QuizView.vue"
import ResultView from "../views/ResultView.vue"
import InfoView from "../views/InfoView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'home',
            component: HomeView
        },
        {
            path: "/quiz",
            name: 'quiz',
            component: QuizView
        },
        {
            path: "/result",
            name: 'result',
            component: ResultView
        },
        {
            path: "/info",
            name: 'info',
            component: InfoView
        }
    ]
})

export default router
