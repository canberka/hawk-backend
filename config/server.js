module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8080), // BURAYA DİKKAT
  app: {
    keys: env.array('APP_KEYS'),
  },
});
