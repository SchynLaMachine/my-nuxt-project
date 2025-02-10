<template>
  <div class="relative min-h-screen">
    <!-- 🌍 Background traces de pneus -->
    <div class="absolute inset-0 bg-about"></div>

    <div class="relative min-h-screen py-16 px-8 flex flex-col items-center">
      <div
        class="max-w-6xl w-full bg-white-translucent p-8 shadow-lg rounded-lg"
      >
        <!-- Titre principal -->
        <h1 class="text-4xl font-bold text-secondary mb-8 text-center">
          Nos Accessoires
        </h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <!-- Accessoires -->
          <div
            v-for="(accessoire, index) in accessoires"
            :key="index"
            class="bg-gray-100 p-4 rounded-lg shadow-md text-center"
          >
            <img
              :src="accessoire.image"
              :alt="accessoire.nom"
              class="h-64 w-64 object-contain mx-auto rounded-lg mb-4 cursor-pointer"
              @click="openImage(accessoire.image)"
            />
            <h2 class="text-lg font-semibold">{{ accessoire.nom }}</h2>
            <p class="text-gray-600 mt-2">{{ accessoire.description }}</p>
            <p class="text-primary font-bold mt-2">€ {{ accessoire.prix }}</p>
            <button class="btn-primary">Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Affichage de l'image en grand -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    >
      <div class="relative">
        <img
          :src="selectedImage"
          class="max-w-4xl max-h-[90vh] rounded-lg shadow-lg"
        />
        <button
          @click="closeImage"
          class="absolute top-4 right-4 text-white text-3xl font-bold"
        >
          ✖
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImage: null,
      accessoires: [
        {
          image: "/images/accessoire1.jpg",
          nom: "Tote Bag Pizza Supplément Prout",
          description:
            "Affichez fièrement votre amour pour la pizza... avec une touche humoristique décalée.",
          prix: "12,99",
        },
        {
          image: "/images/accessoire2.jpg",
          nom: "Tote Bag Oh Mamma Mia",
          description:
            "Le tote bag parfait pour transporter vos affaires avec style et exagération italienne.",
          prix: "12,99",
        },
        {
          image: "/images/accessoire3.jpg",
          nom: "Tote Bag Police du Baltrou",
          description:
            "Pour ceux qui ont une autorité naturelle... ou qui veulent juste faire rire leurs potes.",
          prix: "12,99",
        },
        {
          image: "/images/accessoire4.jpg",
          nom: "Mug Pizza Supplément Prout",
          description:
            "Idéal pour accompagner votre café... et rappeler que l'humour, c'est la vie.",
          prix: "14,99",
        },
        {
          image: "/images/accessoire5.jpg",
          nom: "Mug Police du Baltrou",
          description:
            "Boire son café comme un vrai justicier du bon goût (ou du n'importe quoi).",
          prix: "14,99",
        },
        {
          image: "/images/accessoire6.jpg",
          nom: "Mug Oh Mamma Mia",
          description:
            "Parce qu'un bon café mérite une expression culte pour commencer la journée.",
          prix: "14,99",
        },
      ],
    };
  },
  methods: {
    openImage(image) {
      this.selectedImage = image;
    },
    closeImage() {
      this.selectedImage = null;
    },
  },
};
</script>

<style>
/* 🌍 Appliquer le background "traces de pneus" */
.bg-about {
  background: url("/images/background.png") repeat center top;
  background-color: rgba(235, 235, 247, 0.5); /* Bleu clair transparent */
  background-size: 1920px auto; /* Taille fixe pour correspondre aux autres pages */
  background-position: center top;
  background-blend-mode: multiply;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* 🎨 Fond translucide pour le contenu */
.bg-white-translucent {
  background: rgba(255, 255, 255, 0.85); /* Blanc avec une opacité de 85% */
  backdrop-filter: blur(5px);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
