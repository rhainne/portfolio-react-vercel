const pages = new Map();

pages.set('home', { name: 'Home', path: '/', anchorable: true });
pages.set('product-crud', { name: 'Product CRUD', path: '/product-crud', anchorable: false });
pages.set('contact', { name: 'Contact', path: '/contact', anchorable: true });

export default pages;