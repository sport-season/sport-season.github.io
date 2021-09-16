import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { showModal } from './components/Modal';
import Thanks from './components/Thanks';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

window.onload = () => {
    if (window.location.hash === '#thanksForDonat') {
        showModal({children: onClose => <Thanks onClose={onClose} />})
    }
}
