import { createApp } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

import './style.css';
import App from './App.vue';


createApp(App).mount('#app')
