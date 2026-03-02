<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import { cocktailLists, mockTailLists } from '../constants';

const animate = ():void => {

    const paralaxTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#cocktails', 
            start: 'top 30%',
            end: 'bottom 80%',
            scrub: true
        }
    })

    paralaxTimeline.from('#c-left-leaf', { x: -100, y: 100 })
    paralaxTimeline.from('#c-right-leaf', { x: 100, y: 100 })

}

onMounted(() => {
    animate()
})

onUnmounted(() => {
    ScrollTrigger.getAll().forEach(t => t.kill()); // Evita fugas de memoria de scroll al cambiar de ruta
})

</script>

<template>
    <section id="cocktails" class="noisy">
        <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf">
        <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf">

        <div class="list">
            <div class="popular">
                <h2>Most popular cocktails:</h2>
                <ul>
                    <li v-for="{ name, country, detail, price } in cocktailLists" :key="name">
                        <div class="md:me-28">
                            <h3>{{ name }}</h3>
                            <p>{{ country }} | {{ detail }}</p>
                        </div>
                        <span>- {{ price }}</span>
                    </li>
                </ul>
            </div>
            <div class="loved">
                <h2>Most loved cocktails:</h2>
                <ul>
                    <li v-for="{ name, country, detail, price } in mockTailLists" :key="name">
                        <div class="me-28">
                            <h3>{{ name }}</h3>
                            <p>{{ country }} | {{ detail }}</p>
                        </div>
                        <span>- {{ price }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>