<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap'

import { navLinks } from '../constants';

const navTween = gsap.timeline({ 
    scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top' // Cuando el fondo del nabvar alcance el top del viewport
    }
})

const animateNav = (element:string):void => {
    navTween.fromTo('nav', { backgroundColor: 'transparent'}, { backgroundColor: '#00000050', backgroundFilter: 'blur(10px)', duration: 1, ease: 'power1.inOut' })
}

onMounted(() => {
    animateNav('nav')
})

</script>

<template>
    <nav>
        <div>
            <a href="#home" class="flex items-center gap-2">
                <img src="/images/logo.png" alt="logo">
                <p>Velvet Pour</p>
            </a>
            <ul>
                <li v-for="link in navLinks" :key="link.id">
                    <a :href="`#${link.id}`">{{ link.title }}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>