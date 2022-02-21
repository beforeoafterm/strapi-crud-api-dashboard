module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '77b96f4f123c50e244df6bd0c51354d1'),
  },
});
