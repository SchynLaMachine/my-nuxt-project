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
          Nos Vêtements
        </h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <!-- Vêtements -->
          <div
            v-for="(vetement, index) in vetements"
            :key="index"
            class="bg-gray-100 p-4 rounded-lg shadow-md text-center"
          >
            <img
              :src="vetement.image"
              :alt="vetement.nom"
              class="h-64 w-64 object-contain mx-auto rounded-lg mb-4 cursor-pointer"
              @click="openImage(vetement.image)"
            />
            <h2 class="text-lg font-semibold">{{ vetement.nom }}</h2>
            <p class="text-gray-600 mt-2">{{ vetement.description }}</p>
            <p class="text-primary font-bold mt-2">€ {{ vetement.prix }}</p>
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
      vetements: [
        {
          image: "/images/vetement1.jpg",
          nom: "T-Shirt Police du Baltrou",
          description:
            "Un t-shirt pour faire respecter la loi sacrée du bon goût et éloigner les imposteurs.",
          prix: "19,99",
        },
        {
          image: "/images/vetement2.jpg",
          nom: "T-Shirt Oh Mamma Mia",
          description:
            "Inspiré de l'expression culte, ce t-shirt est un hommage à nos moments les plus épiques.",
          prix: "19,99",
        },
        {
          image: "/images/vetement3.jpg",
          nom: "T-Shirt Pizza Supplément Prout",
          description:
            "Une création décalée pour les amateurs de pizza... et d'humour douteux.",
          prix: "19,99",
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
