import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './styles/styles.scss';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-58qrjgz74uada6q2.us.auth0.com"
    clientId="BcDsK0u8rTOcThXQpeuwDk3TxPgvudRs"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);