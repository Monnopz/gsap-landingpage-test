<script setup lang="ts">
import { onMounted } from 'vue';

import gsap from 'gsap';
import { SplitText } from 'gsap/all';


const heroSplitAnimation = ():void => {
    const heroSplit = new SplitText('.title', { type: 'chars, words' }); // Rompe en letras y palabras
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' }); // Rompe en líneas
    heroSplit.chars.forEach((char) => char.classList.add('text-gradient')); // Agrega clase a cada letra

    gsap.from(heroSplit.chars, {
        yPercent: 100,
        duration: 1.8,
        ease: 'expo.out',
        stagger: 0.06
    });

    gsap.from(paragraphSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 1.8,
        ease: 'expo.out',
        stagger: 0.06,
        delay: 1 // Espera un segundo hasta que se ejecute la animacion principal (en este caso la anterior)
    });
}

const heroLeafsAnimation = () => {
    const timelineLeafs = gsap.timeline({
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top', // Cuando el top del hero alcance el top del viewport
            end: 'bottom top', // Cuando el bottom del hero alcance el top del viewport
            scrub: true // Sincroniza la animación con el scroll. Si esta en false, la animación se ejecutará una vez que se alcance el punto de activación, sin importar el scroll. Si está en true, la animación se sincronizará con el scroll, lo que significa que avanzará o retrocederá según el movimiento del scroll.   
        }
    })
    timelineLeafs.to('.right-leaf', { y: 200 }, 0) // Animación para la hoja derecha
    timelineLeafs.to('.left-leaf', { y: -200 }, 0) // Animación para la hoja izquierda
}

onMounted(() => {
    heroSplitAnimation()
    heroLeafsAnimation()
})

</script>

<template>
    <section id="hero" class="noisy">
        <h1 class="title">MOJITO</h1>
        <img src="/images/hero-left-leaf.png" class="left-leaf" alt="Left leaf">
        <img src="/images/hero-right-leaf.png" class="right-leaf" alt="Right leaf">
        <div class="body">
            <div class="content">
                <div class="space-y-5 hidden md:block">
                    <p>Cool. Crisp. Classic.</p>
                    <p class="subtitle">
                        Sip the Spirit <br /> of Summer
                    </p>
                </div>
                <div class="view-cocktails">
                    <p class="subtitle">
                        Every cocktail in our menu is crafted with the freshest ingredients and a touch of love. <br /> Explore our menu and find your perfect match.
                    </p>
                    <a href="#cocktails">View Cocktails</a>
                </div>
            </div>
        </div>
    </section>
</template>