module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  public: "home/ubuntu/strapi_poc/public",
  app: {
    keys: ['81ad8380d49a9396272d81f71edab74a69bd12291a70d70e425021291b82cd44','deea09610]4dcc5f087035c2456885d4580d700cf7cff9b5f17003fea6029636'],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  node: {
    max_old_space_size: 8192,
  },
  upload: {
    provider: "local",
    providerOptions: {
        destination: "./public/uploads",
	url: "/uploads",
    },
  },
});
