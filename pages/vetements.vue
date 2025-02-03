<template>
  <div class="bg-gray-100 text-gray-800 py-16 px-8">
    <h1 class="text-3xl font-bold text-center mb-12">Nos Vêtements</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- T-Shirt 1 -->
      <div class="bg-white p-4 rounded-lg shadow-md text-center">
        <img
          src="/images/vetement1.jpg"
          alt="T-Shirt Police du Baltrou"
          class="h-64 w-64 object-contain mx-auto rounded-lg mb-4 cursor-pointer"
          @click="openImage('/images/vetement1.jpg')"
        />
        <h2 class="text-lg font-semibold">T-Shirt Police du Baltrou</h2>
        <p class="text-gray-600 mt-2">
          Un t-shirt pour faire respecter la loi sacrée du bon goût et éloigner
          les imposteurs.
        </p>
        <p class="text-primary font-bold mt-2">€ 19,99</p>
        <button class="btn-primary">Ajouter au panier</button>
      </div>

      <!-- T-Shirt 2 -->
      <div class="bg-white p-4 rounded-lg shadow-md text-center">
        <img
          src="/images/vetement2.jpg"
          alt="T-Shirt Oh Mamma Mia"
          class="h-64 w-64 object-contain mx-auto rounded-lg mb-4 cursor-pointer"
          @click="openImage('/images/vetement2.jpg')"
        />
        <h2 class="text-lg font-semibold">T-Shirt Oh Mamma Mia</h2>
        <p class="text-gray-600 mt-2">
          Inspiré de l'expression culte, ce t-shirt est un hommage à nos moments
          les plus épiques.
        </p>
        <p class="text-primary font-bold mt-2">€ 19,99</p>
        <button class="btn-primary">Ajouter au panier</button>
      </div>

      <!-- T-Shirt 3 -->
      <div class="bg-white p-4 rounded-lg shadow-md text-center">
        <img
          src="/images/vetement3.jpg"
          alt="T-Shirt Pizza Supplément Prout"
          class="h-64 w-64 object-contain mx-auto rounded-lg mb-4 cursor-pointer"
          @click="openImage('/images/vetement3.jpg')"
        />
        <h2 class="text-lg font-semibold">T-Shirt Pizza Supplément Prout</h2>
        <p class="text-gray-600 mt-2">
          Une création décalée pour les amateurs de pizza... et d'humour
          douteux.
        </p>
        <p class="text-primary font-bold mt-2">€ 19,99</p>
        <button class="btn-primary">Ajouter au panier</button>
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
