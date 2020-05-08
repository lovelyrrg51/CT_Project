import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store';

Vue.use(Router);

const router = new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    mode: 'history',
    routes: [

        {
            path: '/',
            name: 'index',
            meta: {layout: 'default'},
            component: () => import('../components/Login.vue'),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            meta: {layout: 'default'},
            component: () => import('../components/Dashboard.vue'),
        },

    ]
})

router.beforeEach((to, from, next) => {
    if(to.name !== 'index' && to.name !== '404')
    {
        var loginFlag = store.getters.getLoginFlag;
        if(loginFlag === false) {
            next({ name: 'index' });
            return;
        }
        document.title = 'CT Project Dashboard v1.0';
    }
    next();
});

export default router