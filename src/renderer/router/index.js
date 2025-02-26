import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: require('@/components/Index').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
