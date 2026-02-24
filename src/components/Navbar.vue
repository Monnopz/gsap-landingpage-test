<script setup lang="ts">
import { navLinks } from '../constants';

</script>

<template>
    <nav>
        <div>
            <a href="#home" class="flex items-center gap-2">
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