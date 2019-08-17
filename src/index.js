import React from "react";
import ReactDOM from "react-dom";
import { Provider} from 'react-redux'
import configureStore from './store/configureStore'
import App from "./components/App";
import './styles.css'
const store = configureStore()

const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
