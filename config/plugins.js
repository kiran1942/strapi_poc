module.exports = ({ env })=>({
  upload: {
    provider: 'local',
    providerOptions: {
      localServer: {
        maxage: 300000
      }
    }
  }
});
