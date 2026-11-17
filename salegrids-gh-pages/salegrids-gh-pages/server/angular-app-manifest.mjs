
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/salegrids/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 12141, hash: '360349112736167498aa63f112f28ab1b673e34d3d43771f7206d43c67c2482a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10343, hash: '83b293473acb96157f83706c9d98aeb6d7a0d1601d94436aaa647ca3db03251e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ACYXOGFO.css': {size: 22037, hash: 'Vbc2/Rizqkk', text: () => import('./assets-chunks/styles-ACYXOGFO_css.mjs').then(m => m.default)}
  },
};
