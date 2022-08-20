import React from 'react'
import  ReactDOM  from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import 'antd/dist/antd.css'
import {Provider} from 'react-redux'
import store from './app/store.js'
import { createRoot } from 'react-dom/client';

/* ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
    
</BrowserRouter>


,document.getElementById('root')) */
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
    
</BrowserRouter>

);

