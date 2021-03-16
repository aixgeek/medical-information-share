import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/statistics', component: '@/pages/statistics', title: '统计报表' },
  ],
  fastRefresh: {},
  exportStatic: {}
});
