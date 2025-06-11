const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'category/:id', component: () => import('pages/CategoryPage.vue'), props: true },
      {path: '/category-all',component: () => import('pages/CategoryAll.vue'),name: 'CategoryAll'},
      {path: '/category-all/:id',name: 'CategoryPage',component: () => import('src/pages/CategoryPage.vue')},
      {path: '/pojam/:id',component: () => import('pages/SymbolPage.vue')},
      { path: '/pojam/:categoryId/:symbolId',component: () => import('src/pages/SymbolPage.vue')},
      { path: '/game',component: () => import('src/pages/GamePage.vue')},
      {
  path: '/instructions',
  component: () => import('pages/InstructionsPage.vue')
},
{
  path: '/terms',
  component: () => import('pages/TermsPage.vue')
},
{
  path: '/contact',
  component: () => import('pages/ContactPage.vue')
}
      
    
    ]
  },


]

export default routes
