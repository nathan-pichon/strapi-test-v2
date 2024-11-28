const config = {
  locales: ['fr'],
};
const bootstrap = () => {
  console.log('Bootstrap example - modification of the admin app configuration.');
  return Promise.resolve();
};

export default {
  config,
  bootstrap,
};
