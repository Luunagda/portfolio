<template>
  <main>
    <div class="project-detail container flex flex-col align-center justify-center mx-auto p-6">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        
      </div>

     
      
      <dialog id="my_modal_3" class="modal">
        <div class="modal-box">
          <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <video controls class="mt-6">
            <source :src="project.video" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>
      </dialog>

      
    
      <div class="cmd-container mb-12">
        <div class="cmd-header">
          <div class="cmd-title flex active">
            <p>{{ project.title }}</p>
            <span class="close-tab">×</span>
          </div>
          <div class="cmd-buttons">
            <span class="btn minimize"></span>
            <span class="btn maximize"></span>
            <span class="btn close"></span>
          </div>
        </div>
        <div class="cmd-body">
          <div class="image">
            <img :src="project.image" alt="Image de projet" class="w-full" />
          </div>
        
          <div class="p-6 contenu">
            <h2 class="text-2xl font-semibold mb-2">{{ project.title }}</h2>
            <button v-if="project.video" class="btn" onclick="my_modal_3.showModal()">Voir la vidéo</button>
            <a v-if="project.lien" :href="project.lien"><button class="btn">Lien vers le projet</button></a>


            <p class="text-gray-700 mb-4">{{ project.description }}</p>
            
            <div class="mb-4">
              <span class="font-bold text-gray-800">Catégories:</span>
              <div class="flex flex-wrap mt-2">
                <span v-for="category in project.categories" :key="category" class="bg-blue-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                  {{ category }}
                </span>
              </div>
            </div>

            <div v-if="project.technologies" class="mb-4">
              <span class="font-bold text-gray-800">Technologies Utilisées:</span>
              <div class="flex flex-wrap mt-2">
                <span v-for="tech in project.technologies" :key="tech" class="bg-green-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="flex justify-between items-center mt-4">
              <button @click="goBack" class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Retour
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>


  </main>


</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

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
import TimeCapsuleLodge from '@/assets/img/tcl.png';
import Bref from '@/assets/img/bref.png';
import VideoVoydofSpace from '@/assets/video/voydof_space.mp4';
import VV from '@/assets/img/vv.png';
import Symfony from '@/assets/img/symfony.jpg';
import Carriole from '@/assets/img/carriole.png';
import GalerieVideo from '@/assets/video/galerie.mp4';
import Galerie from '@/assets/img/galerie.png';

const route = useRoute();
const router = useRouter();

const formatString = (input) => {
  let formattedString = input.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[.,\/#'"!$%\^&\*;:{}=\-_`~()]/g, '')
    .replace(/\s+/g, '-');
  return formattedString;
};

const projects = ref([
  { 
    title: 'Voydof Space', 
    image: VoydofSpace, 
    lien: 'https://cyan-22.mysthillium.net',
    insta: 'https://www.instagram.com/voydof_space',
    video: VideoVoydofSpace,
    description: "Ce projet a été réalisé durant ma formation et il s'agit d'un travail collectif sur la création d'un jeu de société. Pour ce projet, j'ai participé à la conception du game design, à la création des cartes, à la réalisation d'une vidéo teaser et à la création du site web du jeu. Durant une partie de jeu, le joueur incarne un contrebandier de l'espace. Son objectif est de réaliser des missions qui vont lui permettre de gagner en notoriété. Pour cela, il peut vendre, acheter ou capturer des monstres en traversant le Voydof Space. Mais attention, la police de l'espace veille !",
    categories: ['Design', 'Développement web', 'Audiovisuel'], 
    technologies: ['Premiere pro', 'MVC', 'PHP', 'HTML', 'CSS'],
    slug: formatString('Voydof Space') 
  },
  { 
    title: 'Time Capsule Lodge', 
    image: TimeCapsuleLodge, 
    lien: 'https://github.com/Luunagda/SAE-401-site-Time-Capsule-Lodge',
    description: "Ce projet a été réalisé durant ma formation de BUT MMI 2. Il s'agit d'un site e-commerce pour une entreprise fictive. Time CapsuleLodge est un hôtel proposant des chambres permettant de voyager dans le temps. Ce projet avait pour but d'adapter un site web réaliser le semestre précédent. Il avait été fait sur la base d'un MVC et nous devions le refaire en Angular tout en le liant à un back office (MVC) avec une API REST.", 
    categories: ['Développement web'], 
    technologies: ['Angular', 'API REST', 'MVC', 'PHP', 'HTML', 'CSS', 'TypeScript'],
    slug: formatString('Time Capsule Lodge') 
  },
  {
    title: 'Bref, j\'ai beaucoup de passions',
    image: Bref,
    Lien : 'https://youtu.be/PqSV1edC284',
    video: '',//la video est sur mon PC qui est actuellement chez un technicien, je ne peux donc pas la mettre. je récupère mon PC dans la semaine.
    description: "Ce projet a été réalisé durant ma formation de BUT MMI 1. Il s'agit d'un court-métrage humoristique mettant en scène une personne qui a beaucoup de passions dans un style Bref. J'ai réalisé ce projet en collaboration avec une équipe de tournage. J'ai participé à la prise de vue, au montage et à la post-production.",
    categories: ['Audiovisuel'],
    technologies: ['Premiere pro', 'After Effects'],
    slug: formatString('Bref, j\'ai beaucoup de passions')
  },
  { 
    title: 'Graphique sur le nombre d\'entrée par film au cinéma', 
    image: Graphique, 
    lien: 'https://github.com/Luunagda/Site-SAE-Graphique',
    description: "Ce projet a été réalisé durant ma formation de BUT MMI 2. Il utilise les librairies JavaScript Koolchart et Amcharts. L'objectif était de récupérer un jeu de données en ligne et de les afficher dans des graphiques. Avec ma camarade de classe, nous avons fait le choix de traiter des données sur les films ayant généré le plus d'entrées en France. ", 
    categories: ['Développement web', 'Design'], 
    technologies: ['JavaScript', 'Koolchart','Amcharts', 'HTML', 'CSS', 'After Effects', 'Illustrator'],
    slug: formatString('Graphique sur le nombre d\'entrée par film au cinéma') 
  },
  { 
    title: 'Visite virtuelle de l\'IUT', 
    image: VV, 
    lien: 'https://sae203.hopto.org/~vv/',
    description: "Ce projet a été réalisé durant ma formation de BUT MMI 3, au cours de mon alternance. Il s'agit d'une visite virtuelle de l'IUT adaptée de projets déjà existant. La plupart des photos ont été reprise avec une caméra 360°. Le projet a été réalisé avec la librairie JavaScript Panolens.js. L'utilisateur peut se déplacer dans l'IUT et cliquer sur les hotspots pour découvrir des informations supplémentaires.", 
    categories: ['Développement web', 'Audiovisuel'], 
    technologies: ['Insta360 Studio', 'HTML', 'CSS', 'JavaScript'],
    slug: formatString('Visite virtuelle de l\'IUT') 
  },
  { 
    title: 'Création d\'un Backoffice', 
    image: Symfony, 
    lien: 'https://github.com/Luunagda/Avengers_cyan',
    description: "Ce projet a été réalisé durant ma formation de BUT MMI 3. Il s'agit de la création d'un backoffice sur divers sujet. Ce projet consistait à nous apprendre les bases de Symfony. ",
    categories: ['Développement web'],
    technologies: ['Symfony', 'PHP', 'HTML', 'CSS'],
    slug: formatString('Création d\'un Backoffice')
  },
  {
    title: 'Course de carriole',
    image: Carriole,
    lien: 'https://drive.google.com/drive/folders/1D7ztFl-WDXMWGXOSU9cqQYRjwwopJMnD?usp=sharing',
    description: "Ce projet a été réalisé durant ma formation BUT MMI 2. Il s'agit d'un jeu vidéo réalisé en 1 semaine. Le joueur incarne une voiture qui doit éviter les obstacles pour arriver à la ligne d'arrivée. Il a été fait sur Unity.",
    categories: ['Unity'],
    technologies: ['Unity', 'C#'],
    slug: formatString('Course de carriole')
  },
  {
    title: 'Galerie moteur de recherche',
    image: Galerie,
    video: GalerieVideo,
    description: "Ce projet a été réalisé durant ma formation de BUT MMI 3. Il s'agit d'une galerie affichant les 10 premiers résultat d'une recherche. La recherche et les autres commandes sont réalisée vocalement.",
    categories: ['Unity'],
    technologies: ['Unity', 'C#'],
    slug: formatString('Galerie moteur de recherche')
  }

  // Ajoutez d'autres projets ici
]);

const project = ref({});
const isVideoPlaying = ref(false);


onMounted(() => {
  const projectSlug = route.params.slug; // Récupère le slug passé dans les paramètres
  project.value = projects.value.find(project => project.slug === projectSlug); // Trouve le projet correspondant au slug

  if (!project.value) {
    console.error("Projet non trouvé pour le slug :", projectSlug);
  }
});


const goBack = () => {
  router.go(-1);
};

</script>
<style scoped>
/* Conteneur de la fenêtre */
.cmd-container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* En-tête de la fenêtre */
.cmd-header {
  background-color: #ccc;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

.cmd-title {
  color: rgb(9, 9, 9) !important;
  background-color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 0 5px 0 10px;
  height: 100%;
}

.cmd-title:hover {
  background-color: #9b9b9b;
}
.cmd-title span{
  height: 22px;
  width: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 3px;
}

.cmd-title span:hover {
  background-color: #cfcfcf;
}

/* Boutons (Minimiser, Maximiser, Fermer) */
.cmd-buttons {
    display: flex;
}

.cmd-buttons button:focus {
  outline: none;
}
/* Boutons pour minimiser, maximiser, et fermer */
.minimize::before {
  content: '–';
}

.maximize::before {
  content: '□';
}

.close::before {
  content: '×';
}

/* Changement de couleur au survol */
.btn.close:hover {
  background-color: #d31b15;
}

.btn.maximize:hover {
  background-color: #555555;
}

.btn.minimize:hover {
  background-color: #555555;
}
.cmd-buttons .btn{
  height: 30px !important;
  min-height: 30px;
  border-radius: 0 !important;
  border: none;
  font-size: 1.3rem;
  background-color: #ccc;
}
/* Corps de la fenêtre */
.cmd-body {
  padding: 15px;
  color: white;
  font-size: 16px;
  line-height: 1.6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  overflow-y: auto;
  /* margin: 0; */
}
.cmd-body .image {
  width: 40%;
}
.cmd-body .image img {
  width: 100%;
}
.cmd-body .contenu {
  width: 60%;
}
main{
  padding-top: 100px;
}

p, h1, h2, h3, h4, h5, h6, a, li, span {
  color: #fff;
  @apply font-heading;
}
.project-detail {
  padding: 20px;
}
</style>
