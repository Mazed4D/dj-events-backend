module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '05f9a278cb297a43d460fca89f362fc0'),
  },
});
