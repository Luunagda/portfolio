<template>
  <div v-if="collection.length" class="navbar fixed">
    <div class="flex-1">
      <h1>Portfolio</h1>
    </div>
    <div class="dropdown flex-none dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li v-for="({ label, link }, i) in collection" :key="i">
          <RouterLink :to="link">
            {{ label }}
          </RouterLink>
        </li>
        <li>
          <a href="@/assets/CV.pdf" download="CV.pdf">
            CV
          </a>
        </li>
      </ul>
    </div>
    <div class="navbar-end hidden sm:flex">
      <ul class="menu menu-horizontal px-1">
        <li v-for="({ label, link }, i) in collection" :key="i">
          <RouterLink :to="link" class="text-sm font-bold text-heading transition dark:text-white">
            {{ label }}
          </RouterLink>
        </li>
        <li>
          <a href="@/assets/CV.pdf" download="CV.pdf">
            <img src="@/assets/img/cv.png" alt="Télécharger le CV"/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const collection = ref([
  { label: 'Accueil', link: '/' },
  { label: 'A propos', link: '/a-propos' },
  { label: 'Projets', link: '/projets' }
])
</script>

<style scoped>
p, h1, h2, h3, h4, h5, h6, a, li, span {
  color: #fff !important;
  @apply font-heading;
}
.navbar {
  background-color: rgba(9, 9, 9, 0.3);
  backdrop-filter: blur(3px);
  z-index: 1000;
}
ul{
  display: flex;
  align-items: center;
}
h1 {
  font-family: 'Glitch_Paradise';
  font-size: 3rem;
  margin-left: 10px;
  padding: 0;
}
</style>




<!-- <template>
  <div v-if="collection.length" class="navbar fixed">
    <div class="flex-1">
      <h1>Portfolio</h1>
    </div>
    <div class="dropdown flex-none dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        @mouseleave="updateDotPosition()"
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li v-for="({ label, link }, i) in collection" :key="i" :ref="el => menuItemEls[i] = el">
          <RouterLink
            :to="link"
            @mouseenter="updateDotPosition(i)"
          >
            {{ label }}
          </RouterLink>
        </li>
      </ul>
      <span
        v-if="dotPosition !== null"
        :style="{ transform: `translate3d(${dotPosition}px, -50%, 0)` }"
        class="dot"
      ></span>
    </div>
    <div class="navbar-end hidden lg:flex">
      <ul @mouseleave="updateDotPosition()" class="menu menu-horizontal px-1">
        <li v-for="({ label, link }, i) in collection" :key="i" :ref="el => menuItemEls[i] = el">
          <RouterLink
            :to="link"
            @mouseenter="updateDotPosition(i)"
            class="text-sm font-bold text-heading transition dark:text-white"
          >
            {{ label }}
          </RouterLink>
        </li>
      </ul>
      <span
        ref="dotPosition"
        v-if="dotPosition !== null"
        :style="{ transform: `translate3d(${dotPosition}px, -50%, 0)` }"
        class="dot"
      ></span>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useEventListener } from '@vueuse/core'

const menuItemEls = ref([]) 
const dotPosition = ref(null)
const route = useRoute()

const collection = ref([
  { label: 'Accueil', link: '/' },
  { label: 'A propos', link: '/a-propos' },
  { label: 'Projets', link: '/projets' }
])

let activeMenuIndex = ref(0)

onMounted(async () => {
  await nextTick()

  updateActiveMenuIndex()

  // Mettre à jour la position du dot au démarrage
  if (activeMenuIndex.value !== -1) {
    updateDotPosition(activeMenuIndex.value)
  }
})

// Surveiller les changements de route pour mettre à jour le dot
watch(route, () => {
  updateActiveMenuIndex()
  updateDotPosition(activeMenuIndex.value)
})

// Mettre à jour la position du dot sur redimensionnement de la fenêtre
useEventListener('resize', () => updateDotPosition(activeMenuIndex.value))

function updateActiveMenuIndex() {
  activeMenuIndex.value = collection.value.findIndex(({ link }) => 
    route.path === link || route.path.startsWith(`${link}/`)
  )
}

function updateDotPosition(index = activeMenuIndex.value) {
  if (menuItemEls.value.length > 0 && index !== null && index !== undefined) {
    const el = menuItemEls.value[index]
    if (el) {
      const elOffsetLeft = el.offsetLeft
      const elWidth = el.offsetWidth
      const navbarWidth = el.closest('.navbar').offsetWidth

      // Assurez-vous que le dot ne sort pas des limites de l'écran
      if (elOffsetLeft + elWidth <= navbarWidth) {
        dotPosition.value = elOffsetLeft + elWidth / 2 // Centrer le dot
      }
    }
  }
}
</script>


<style scoped>
.navbar {
  background-color: rgba(9, 9, 9, 0.3);
  backdrop-filter: blur(3px);
  z-index: 1000;
}

h1 {
  font-family: 'Glitch_Paradise';
  font-size: 3rem;
  margin-left: 10px;
  padding: 0;
}

.dot {
  position: absolute;
  height: 8px;
  width: 8px;
  left: 0;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
  top: 50%; /* Centrer verticalement */
  transform: translateY(-50%);
}
@media (max-width: 1024px) {
  .dot {
    display: none;
  }
  
}
</style> -->
