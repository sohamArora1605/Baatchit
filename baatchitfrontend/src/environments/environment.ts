export const environment = {
  production: false,
  keycloak: {
    url: 'http://localhost:9081',
    realm: 'Baatchit',
    clientId: 'baatchitAppclient'
  },
  frontendserver: {
    url: 'http://localhost:4200'
  },
    backendserver: {
        url: 'http://localhost:9999'
    },
    websocketUrl: 'http://localhost:9999/ws'
};
