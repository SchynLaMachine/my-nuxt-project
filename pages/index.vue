<template>
  <div class="bg-gray-100 text-gray-800">
    <div class="space-y-0">
      <!-- Bannière 1 : Vêtements -->
      <div
        class="relative h-[90vh] w-full flex flex-col items-end justify-center px-16"
      >
        <div class="absolute inset-0">
          <img
            src="/images/banner1.jpg"
            alt="Bannière Vêtements"
            class="h-full w-full object-cover brightness-75"
          />
        </div>
        <div class="relative z-10 text-white max-w-lg mr-50 text-center">
          <h1 class="text-4xl font-bold uppercase">Collection Vêtements</h1>
          <p class="mt-2 text-lg font-light">
            Découvrez notre gamme de vêtements inspirée de notre univers absurde
            et décalé. Des designs uniques, des références cultes et un style
            inimitable.
          </p>
          <NuxtLink
            to="/vetements"
            class="relative z-10 mt-6 flex justify-center"
          >
            <button class="banniere-btn">Découvrir</button>
          </NuxtLink>
        </div>
      </div>

      <!-- 🚀 Bandeau défilant -->
      <div class="relative bg-white overflow-hidden border-y border-gray-300">
        <div class="marquee flex items-center space-x-8 font-bold text-lg py-2">
          <span>🚚 Frais de port offerts à partir de 50€ d'achat !</span>
          <span>🎉 Nouveaux produits chaque semaine, ne les manquez pas !</span>
          <span>📦 Livraison rapide en 24/48h !</span>
          <span>🛒 Paiements sécurisés pour toutes vos commandes !</span>
          <span>🚚 Frais de port offerts à partir de 50€ d'achat !</span>
        </div>
      </div>

      <!-- Bannière 2 : Accessoires -->
      <div
        class="relative h-[90vh] w-full flex flex-col items-start justify-center px-16"
      >
        <div class="absolute inset-0">
          <img
            src="/images/banner2.jpg"
            alt="Bannière Accessoires"
            class="h-full w-full object-cover brightness-75"
          />
        </div>
        <div class="relative z-10 text-white max-w-lg ml-50 text-center">
          <h1 class="text-4xl font-bold uppercase">Collection Accessoires</h1>
          <p class="mt-2 text-lg font-light">
            Mettez la touche finale à votre style avec nos mugs et tote bags
            exclusifs. Des objets du quotidien transformés en références
            incontournables.
          </p>
          <NuxtLink
            to="/accessoires"
            class="relative z-10 mt-6 flex justify-center"
          >
            <button class="banniere-btn">Découvrir</button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Section des designs ajustés -->
    <div class="py-16 bg-gray-100">
      <h2 class="text-center text-2xl font-bold mb-8">
        Nos designs en avant-première
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
        <!-- Image 1 -->
        <div
          class="relative group bg-gray-200 h-80 w-full rounded-lg overflow-hidden flex items-center justify-center"
        >
          <img
            src="/images/design1.png"
            alt="Design 1"
            class="h-full w-full object-contain transition duration-300 group-hover:brightness-75"
          />
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 text-white text-center px-4"
          >
            <p class="font-bold italic">
              Un design minimaliste et épuré pour toutes vos envies.
            </p>
          </div>
        </div>
        <!-- Image 2 -->
        <div
          class="relative group bg-gray-200 h-80 w-full rounded-lg overflow-hidden flex items-center justify-center"
        >
          <img
            src="/images/design2.png"
            alt="Design 2"
            class="h-full w-full object-contain transition duration-300 group-hover:brightness-75"
          />
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 text-white text-center px-4"
          >
            <p class="font-bold italic">
              Un hommage aux formes géométriques et au brutalisme.
            </p>
          </div>
        </div>
        <!-- Image 3 -->
        <div
          class="relative group bg-gray-200 h-80 w-full rounded-lg overflow-hidden flex items-center justify-center"
        >
          <img
            src="/images/design3.png"
            alt="Design 3"
            class="h-full w-full object-contain transition duration-300 group-hover:brightness-75"
          />
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 text-white text-center px-4"
          >
            <p class="font-bold italic">
              Des motifs abstraits qui ajoutent une touche artistique.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* 🚀 Animation du bandeau défilant */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee {
  display: flex;
  white-space: nowrap;
  width: 200%;
  animation: marquee 15s linear infinite;
}
</style>
