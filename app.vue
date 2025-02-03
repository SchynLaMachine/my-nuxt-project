<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-secondary text-white py-4">
      <nav class="flex items-center justify-between px-8">
        <div class="flex-1 flex items-center">
          <NuxtLink to="/">
            <img src="/images/logo.png" alt="Logo" class="h-16 w-auto" />
          </NuxtLink>
        </div>
        <div class="flex-1 flex justify-center space-x-8">
          <NuxtLink to="/" class="hover:underline">Accueil</NuxtLink>
          <NuxtLink to="/vetements" class="hover:underline">Vêtements</NuxtLink>
          <NuxtLink to="/accessoires" class="hover:underline"
            >Accessoires</NuxtLink
          >
        </div>
        <div class="flex-1 flex justify-end items-center space-x-6">
          <NuxtLink to="/a-propos" class="hover:underline">À propos</NuxtLink>
          <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
          <div class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 6m12-6l2-6m-2 6l2 6M7 13h10M10 21h4"
              />
            </svg>
            <span>€ 0,00</span>
          </div>
          <button class="btn-primary">Connexion</button>
        </div>
      </nav>
    </header>

    <!-- Contenu principal -->
    <main class="flex-grow">
      <NuxtPage />
    </main>

    <!-- Footer avec emoji intégré -->
    <footer class="bg-secondary text-white py-8 px-8 relative footer-container">
      <!-- 🚗 Emoji voiture roulant juste au-dessus du footer -->
      <div class="emoji-container">
        <span class="emoji">🚗💨</span>
      </div>

      <div class="max-w-6xl mx-auto">
        <!-- Première ligne : Texte de présentation -->
        <div class="md:flex md:justify-between md:items-start mb-8">
          <div class="md:w-2/3">
            <p class="text-sm leading-relaxed font-bold italic">
              Découvrez une sélection unique de vêtements, mugs et tote bags
              inspirés d’un univers décalé et humoristique. Chaque produit est
              conçu pour allier style, qualité et une bonne dose d’absurde,
              directement tirée de nos vidéos cultes. Affirmez votre
              personnalité avec nos créations originales !
            </p>
          </div>
          <div class="md:w-1/3 flex justify-center md:justify-end mt-4 md:mt-0">
            <ul class="flex space-x-6 text-sm">
              <li>
                <NuxtLink to="/" class="hover:underline">Accueil</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/vetements" class="hover:underline"
                  >Vêtements</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/accessoires" class="hover:underline"
                  >Accessoires</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- Deuxième ligne : Conditions et Politique -->
        <div
          class="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center text-sm"
        >
          <NuxtLink to="/conditions-generales" class="hover:underline"
            >Conditions Générales de Vente</NuxtLink
          >
          <p class="text-center md:mx-auto">
            Tous droits réservés © 2025 | Oh Mamma Mia
          </p>
          <NuxtLink to="/politique-confidentialite" class="hover:underline"
            >Politique de Confidentialité</NuxtLink
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* 🚗 Conteneur de l'emoji voiture collé au footer */
.footer-container {
  position: relative;
}

/* Le conteneur est à l'intérieur du footer pour être bien positionné */
.emoji-container {
  position: absolute;
  bottom: 98%; /* Ajustement fin pour descendre la voiture légèrement */
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  z-index: 10; /* Assure que l'emoji est visible */
}

/* Animation de l'emoji voiture */
.emoji {
  display: inline-block;
  font-size: 2rem; /* Taille de l'emoji */
  animation: rouler 6s linear infinite; /* Animation infinie */
}

/* Définition de l'animation : de droite à gauche */
@keyframes rouler {
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(-100%);
  }
}

/* 🚀 Boutons circulaires des bannières */
.banniere-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 50px;
  background-color: white;
  color: #2f2e81;
  font-weight: 300;
  font-size: 16px;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

/* Effet au survol */
.banniere-btn:hover {
  background-color: #2f2e81;
  color: white;
  border: 2px solid white;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
}
</style>
