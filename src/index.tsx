import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const foo = 2;
const bar = 0;

const tem = [foo || bar]
console.log("the tem " + tem)

ReactDOM.render(
    <React.StrictMode>
        <head>
         <meta name="google-site-verification" content="gyJ1UOEygvIt6mcGm17KP7qvbV2Xbb4OM_maCEcDD8s-1pFjr7o3x" />
         </head>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
