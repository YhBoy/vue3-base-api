import { createRouter, createWebHistory } from "vue-router";

const routes = [{
        path: "/",
        redirect: "/test"
    },
    {
        path: "/test",
        component: () =>
            import ("../views/test/index.vue")
    }
]




const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router