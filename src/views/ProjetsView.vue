<template>
  <main class="projet">
    <h1 class="my-6">Mes projets</h1>

    <!-- Section de filtrage -->
    <div class="mb-4">
      <button @click="filterCategory = 'all'" class="bg-gray-800 hover:bg-white text-white hover:text-gray-800 py-1 px-4 rounded-full mr-2">Tous</button>
      <button @click="filterCategory = 'Unity'" class="bg-blue-light-cyan hover:bg-white text-white hover:text-blue-light-cyan py-1 px-4 rounded-full mr-2">Unity</button>
      <button @click="filterCategory = 'Développement web'" class="bg-blue-dark-cyan hover:bg-white hover:text-blue-dark-cyan text-white py-1 px-4 rounded-full mr-2">Développement web</button>
      <button @click="filterCategory = 'Design'" class="bg-purple-cyan hover:bg-white text-white hover:text-purple-cyan py-1 px-4 rounded-full mr-2">Design</button>
      <button @click="filterCategory = 'Audiovisuel'" class="bg-yellow-cyan hover:bg-white text-white hover:text-yellow-cyan py-1 px-4 rounded-full">Audiovisuel</button>
    </div>

    <!-- Projets affichés en 3 colonnes -->
    <div class="grid grid-cols-3 gap-4">
      <div v-for="col in projectColumns" :key="col.index" class="flex flex-col">
        <div v-for="project in col.projects" :key="project.title" 
             class="flex flex-col mb-4 hover-target" 
             @mouseover="showTitle($event, project.title)" 
             @mousemove="moveTitle($event)" 
             @mouseleave="hideTitle"
        >
          <div class="relative flex-grow">
            <img :src="project.image" class="w-full h-auto" />
            
            <!-- Tag de catégorie en bas à droite -->
            <div class="absolute bottom-0 right-0 p-2 flex flex-wrap gap-1">
              <span 
                v-for="(category, idx) in project.categories" 
                :key="idx" 
                :class="categoryClass(category)" 
                class="text-xs font-medium px-2 py-1 rounded-full"
              >
                {{ category }}
              </span>
            </div>
          </div>

          <!-- Titre qui suit la souris -->
          <div
            v-if="hoveredTitle === project.title"
            class="absolute pointer-events-none px-3 py-3 bg-white text-black-cyan title-hover"
            :style="{ top: `${mouseY+20}px`, left: `${mouseX}px` }"
          >
            {{ project.title }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import moiImage from '@/assets/img/moi.png';
import moiImage1 from '@/assets/img/me.png';
import moiImage2 from '@/assets/img/moi22.png';
import moiImage3 from '@/assets/img/moi22.png';
import moiImage4 from '@/assets/img/me.jpg';
import moiImage5 from '@/assets/img/me2.png';
import moiImage6 from '@/assets/img/me22.png';
import moiImage7 from '@/assets/img/me222.png';

import Graphique from '@/assets/img/graphique.png';
import VoydofSpace from '@/assets/img/voydof_space.png';
import TimeCapsuleLodge from '@/assets/img/time_capsule_lodge.png';

// Projets et catégories
const projects = ref([
  { title: 'Voydof Space', image: VoydofSpace, categories: ['Design', 'Développement web', 'Audiovisuel'] },
  { title: 'Time Capsule Lodge', image: TimeCapsuleLodge, categories: ['Développement web'] },
  { title: 'Bref, j\'ai beaucoup de passions', image: moiImage2, categories: ['Audiovisuel'] },
  { title: 'Course de carriole', image: moiImage3, categories: ['Unity'] },
  { title: 'Erakis', image: moiImage4, categories: ['Design'] },
  { title: 'Graphique sur le nombre d\'entrée par film au cinéma', image: Graphique, categories: ['Développement web', 'Design'] },
  { title: 'Visite virtuelle de l\'IUT', image: moiImage6, categories: ['Développement web', 'Audiovisuel'] },
  { title: 'Photomontage', image: moiImage7, categories: ['Design'] },
  { title: 'Projet angular ', image: moiImage6, categories: ['Développement web'] },
  { title: 'Création d\'un Backoffice', image: moiImage, categories: ['Développement web'] },
  { title: 'Galerie moteur de recherche', image: moiImage1, categories: ['Unity'] },
  { title: 'Carte Leaflet', image: moiImage5, categories: ['Développement web'] },
  { title: 'Jeu Phaser multijoueur', image: moiImage, categories: ['Développement web'] },
  { title: 'Rugby', image: moiImage3, categories: ['Développement web', 'Unity', 'Audiovisuel'] },
]);

// Variables pour la gestion du titre flottant
const mouseX = ref(0);
const mouseY = ref(0);
const hoveredTitle = ref(null);

// Afficher le titre au survol
const showTitle = (event, title) => {
  hoveredTitle.value = title;
  mouseX.value = event.pageX;
  mouseY.value = event.pageY;
};

// Cacher le titre lorsque la souris quitte le projet
const hideTitle = () => {
  hoveredTitle.value = null;
};

// Mettre à jour la position du titre selon la souris
const moveTitle = (event) => {
  mouseX.value = event.pageX;
  mouseY.value = event.pageY;
};

// Référence réactive pour le filtre de catégorie
const filterCategory = ref('all');

// Calculer les projets filtrés
const filteredProjects = computed(() => {
  if (filterCategory.value === 'all') {
    return projects.value;
  }
  return projects.value.filter(project => project.categories.includes(filterCategory.value));
});

// Créer des colonnes de projets
const projectColumns = computed(() => {
  const columns = [[], [], []];
  filteredProjects.value.forEach((project, index) => {
    columns[index % 3].push(project); // Répartir les projets dans 3 colonnes
  });
  return columns.map((projects, index) => ({ index, projects }));
});

// Associer les classes aux catégories
const categoryClass = (category) => {
  switch (category) {
    case 'Unity':
      return 'bg-blue-light-cyan text-white';
    case 'Développement web':
      return 'text-white bg-blue-dark-cyan';
    case 'Design':
      return 'text-white bg-purple-cyan';
    case 'Audiovisuel':
      return 'text-white bg-yellow-cyan';
    default:
      return 'text-white bg-gray-800';
  }
};
</script>

<style scoped>
.projet {
  padding-top: 100px;
  margin: 0 100px;
  @apply font-heading;

}
.projet h1{
  font-family: Painted;
  font-size: 3.5rem;
  margin-bottom: 4rem;
}
.title-hover {
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

}
.hover-target img{
  filter: grayscale(100%);
}
.hover-target:hover img{
  filter: grayscale(0%);
}
.hover-target:hover{
  cursor: pointer;
}
</style>
