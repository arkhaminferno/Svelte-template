import App from './App.svelte';
import './main.css';
import HMR from  '@roxi/routify/hmr'

const app = HMR(App, { target: document.body }, 'routify-app')

window.app = app;

export default app;