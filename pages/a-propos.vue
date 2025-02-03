<template>
  <div class="relative min-h-screen">
    <!-- 🌍 Appliquer le background uniquement sur cette page -->
    <div class="absolute inset-0 bg-about"></div>

    <div class="relative min-h-screen py-16 px-8 flex flex-col items-center">
      <div
        class="max-w-4xl w-full bg-white-translucent p-8 shadow-lg rounded-lg"
      >
        <!-- Section 1 : Le Coyote Pilote -->
        <div
          class="flex flex-col md:flex-row items-center md:items-start mb-12"
        >
          <div class="md:w-2/3">
            <h1 class="text-4xl font-bold text-secondary mb-6">
              Le Coyote Pilote
            </h1>
            <p class="text-gray-700 leading-relaxed">
              Tout a commencé avec ma chaîne YouTube dédiée aux crashs de
              voitures humoristiques sur le jeu BeamNG. Un projet né de l’envie
              simple mais sincère de faire rire avec un humour absurde et
              décalé. Au fil des vidéos, certaines de mes répliques sont
              devenues des références cultes parmi la communauté. Vous les avez
              adoptées, partagées, et transformées en clins d'œil complices.
              Inspiré par cet engouement, j’ai décidé de leur donner une
              nouvelle vie à travers une gamme de vêtements et d’accessoires. Ce
              site est donc bien plus qu’une boutique : c’est un prolongement de
              cet univers absurde et déjanté, conçu pour vous faire sourire au
              quotidien.
            </p>
          </div>
          <div class="md:w-1/3 md:ml-8 mt-6 md:mt-0">
            <img
              src="/images/coyote.jpg"
              alt="Le Coyote Pilote"
              class="w-full rounded-lg shadow-md"
            />
          </div>
        </div>

        <!-- Séparateur -->
        <div class="border-t my-8"></div>

        <!-- Section 2 : Printify, notre partenaire -->
        <div class="flex flex-col md:flex-row items-center md:items-start">
          <div class="md:w-1/3 md:mr-8 mb-6 md:mb-0">
            <img
              src="/images/printify-logo.webp"
              alt="Printify Logo"
              class="w-48 h-auto rounded-lg shadow-md"
            />
          </div>
          <div class="md:w-2/3">
            <h2 class="text-3xl font-bold text-secondary mb-4">
              Printify, notre partenaire d’impression
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Pour vous offrir des produits de qualité, nous collaborons avec
              Printify, une plateforme spécialisée dans l’impression à la
              demande. Grâce à leur réseau de partenaires à travers le monde,
              chaque article est imprimé avec soin et expédié directement chez
              vous. Cette collaboration nous permet de vous proposer des
              créations originales sans compromis sur la qualité ou le service.
            </p>
          </div>
        </div>

        <!-- Bouton Retour Accueil -->
        <div class="text-center mt-12">
          <NuxtLink to="/" class="btn-primary px-6 py-3 shadow-md text-lg">
            Retour à l'accueil
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* 🌍 Appliquer le background "traces de pneus" uniquement sur la page À propos */
.bg-about {
  background: url("/images/background.png") repeat center top;
  background-color: rgba(235, 235, 247, 0.5); /* Bleu clair transparent */
  background-size: 1920px auto; /* Taille fixe comme sur "À Propos" */
  background-position: center top;
  background-blend-mode: multiply;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* 🎨 Fond blanc légèrement translucide */
.bg-white-translucent {
  background: rgba(255, 255, 255, 0.85); /* Blanc avec une opacité de 85% */
  backdrop-filter: blur(5px); /* Effet léger de flou pour plus d'intégration */
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
