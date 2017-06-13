import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Btn from '@/components/Btn';
import Checkbox from '@/components/Checkbox';
import Modal from '@/components/Modal';
import Tooltip from '@/components/Tooltip';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/button',
      name: 'Btn',
      component: Btn,
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: Checkbox,
    },
    {
      path: '/Modal',
      name: 'Modal',
      component: Modal,
    },
    {
      path: '/tooltip',
      name: 'Tooltip',
      component: Tooltip,
    },
  ],
});
