<template>
  <div class="bg-gray-100 text-gray-800 py-16 px-8">
    <h1 class="text-3xl font-bold text-center mb-12">Nos Accessoires</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Tote Bag 1 -->
      <div class="bg-white p-4 rounded-lg shadow-md text-center">
        <img
          src="/images/accessoire1.jpg"
          alt="Tote Bag Pizza Supplément Prout"
          class="h-64 w-64 object-contain mx-auto rounded-lg mb-4 cursor-pointer"
          @click="openImage('/images/accessoire1.jpg')"
        />
        <h2 class="text-lg font-semibold">Tote Bag Pizza Supplément Prout</h2>
        <p class="text-gray-600 mt-2">
          Affichez fièrement votre amour pour la pizza... avec une touche
          humoristique décalée.
        </p>
        <p class="text-primary font-bold mt-2">€ 12,99</p>
        <button class="btn-primary">Ajouter au panier</button>
      </div>

      <!-- Tote Bag 2 -->
      <div class="bg-white p-4 rounded-lg shadow-md text-center">
        <img
          src="/images/accessoire2.jpg"
          alt="Tote Bag Oh Mamma Mia"
          class="h-64 w-64 object-contain mx-auto rounded-lg mb-4 cursor-pointer"
          @click="openImage('/images/accessoire2.jpg')"
        />
        <h2 class="text-lg font-semibold">Tote Bag Oh Mamma Mia</h2>
        <p class="text-gray-600 mt-2">
          Le tote bag parfait pour transporter vos affaires avec style et
          exagération italienne.
        </p>
        <p class="text-primary font-bold mt-2">€ 12,99</p>
        <button class="btn-primary">Ajouter au panier</button>
      </div>

      <!-- Tote Bag 3 -->
      <div class="bg-white p-4 rounded-lg shadow-md text-center">
        <img
          src="/images/accessoire3.jpg"
          alt="Tote Bag Police du Baltrou"
          class="h-64 w-64 object-contain mx-auto rounded-lg mb-4 cursor-pointer"
          @click="openImage('/images/accessoire3.jpg')"
        />
        <h2 class="text-lg font-semibold">Tote Bag Police du Baltrou</h2>
        <p class="text-gray-600 mt-2">
          Pour ceux qui ont une autorité naturelle... ou qui veulent juste faire
          rire leurs potes.
        </p>
        <p class="text-primary font-bold mt-2">€ 12,99</p>
        <button class="btn-primary">Ajouter au panier</button>
      </div>

      <!-- Mug 1 -->
      <div class="bg-white p-4 rounded-lg shadow-md text-center">
        <img
          src="/images/accessoire4.jpg"
          alt="Mug Pizza Supplément Prout"
          class="h-64 w-64 object-contain mx-auto rounded-lg mb-4 cursor-pointer"
          @click="openImage('/images/accessoire4.jpg')"
        />
        <h2 class="text-lg font-semibold">Mug Pizza Supplément Prout</h2>
        <p class="text-gray-600 mt-2">
          Idéal pour accompagner votre café... et rappeler que l'humour, c'est
          la vie.
        </p>
        <p class="text-primary font-bold mt-2">€ 14,99</p>
        <button class="btn-primary">Ajouter au panier</button>
      </div>

      <!-- Mug 2 -->
      <div class="bg-white p-4 rounded-lg shadow-md text-center">
        <img
          src="/images/accessoire5.jpg"
          alt="Mug Police du Baltrou"
          class="h-64 w-64 object-contain mx-auto rounded-lg mb-4 cursor-pointer"
          @click="openImage('/images/accessoire5.jpg')"
        />
        <h2 class="text-lg font-semibold">Mug Police du Baltrou</h2>
        <p class="text-gray-600 mt-2">
          Boire son café comme un vrai justicier du bon goût (ou du n'importe
          quoi).
        </p>
        <p class="text-primary font-bold mt-2">€ 14,99</p>
        <button class="btn-primary">Ajouter au panier</button>
      </div>

      <!-- Mug 3 -->
      <div class="bg-white p-4 rounded-lg shadow-md text-center">
        <img
          src="/images/accessoire6.jpg"
          alt="Mug Oh Mamma Mia"
          class="h-64 w-64 object-contain mx-auto rounded-lg mb-4 cursor-pointer"
          @click="openImage('/images/accessoire6.jpg')"
        />
        <h2 class="text-lg font-semibold">Mug Oh Mamma Mia</h2>
        <p class="text-gray-600 mt-2">
          Parce qu'un bon café mérite une expression culte pour commencer la
          journée.
        </p>
        <p class="text-primary font-bold mt-2">€ 14,99</p>
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
