const host = '157.253.238.75';
const port = '8084';
const appName = 'frontstepbystep-api';
const rootApi = 'api';

export const environment = {
  production: false,
  baseUrl: `http://${host}:${port}/${appName}/${rootApi}/`
};
