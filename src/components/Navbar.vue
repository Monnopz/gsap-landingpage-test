<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import { navLinks } from '../constants'


const animateNav = (element:string):void => {

    const navTween = gsap.timeline({ 
        scrollTrigger: {
            trigger: 'nav',
            start: 'bottom top', // Cuando el fondo del nabvar alcance el top del viewport
            scrub: true
        }
    })

    navTween.fromTo(element, { backgroundColor: 'transparent'}, { backgroundColor: '#00000050', backdropFilter: 'blur(10px)', duration: 1, ease: 'power1.inOut' })
}

onMounted(() => {
    animateNav('nav')
})

onUnmounted(() => {
    ScrollTrigger.getAll().forEach(t => t.kill()); // Evita fugas de memoria de scroll al cambiar de ruta
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