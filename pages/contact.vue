<template>
  <div class="relative min-h-screen">
    <!-- 🌍 Background traces de pneus -->
    <div class="absolute inset-0 bg-about"></div>

    <div class="relative min-h-screen py-16 px-8 flex flex-col items-center">
      <div
        class="max-w-4xl w-full bg-white-translucent p-8 shadow-lg rounded-lg"
      >
        <!-- Titre principal -->
        <h1 class="text-4xl font-bold text-secondary mb-8 text-center">
          Contactez-nous
        </h1>

        <!-- Introduction -->
        <p class="text-center text-gray-600 italic mb-8">
          Une question ? Un problème ? Une envie soudaine de nous écrire ?
          Remplissez le formulaire ci-dessous, et nous vous répondrons dès que
          possible !
        </p>

        <!-- Formulaire de contact -->
        <form class="space-y-6">
          <div>
            <label class="block text-gray-700 font-semibold">Nom</label>
            <input
              type="text"
              placeholder="Votre nom"
              class="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Votre adresse email"
              class="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-semibold">Objet</label>
            <input
              type="text"
              placeholder="Sujet du message"
              class="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-semibold">Message</label>
            <textarea
              rows="5"
              placeholder="Votre message"
              class="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            class="btn-primary px-6 py-3 w-full shadow-md text-lg"
          >
            Envoyer le message
          </button>
        </form>

        <!-- Séparateur -->
        <div class="border-t my-12"></div>

        <!-- Section FAQ -->
        <h2 class="text-3xl font-bold text-center text-secondary mb-8">
          Foire Aux Questions (FAQ)
        </h2>

        <div class="space-y-4">
          <div
            v-for="(question, index) in faq"
            :key="index"
            class="border rounded-lg overflow-hidden shadow-sm"
          >
            <button
              class="w-full text-left px-4 py-3 bg-gray-200 font-semibold focus:outline-none"
              @click="toggleFAQ(index)"
            >
              {{ question.emoji }} {{ question.question }}
            </button>
            <div v-if="activeFAQ === index" class="p-4 bg-white">
              {{ question.reponse }}
            </div>
          </div>
        </div>

        <!-- Bouton Retour Accueil -->
        <div class="text-center mt-8">
          <NuxtLink to="/" class="btn-primary px-6 py-3 shadow-md text-lg">
            Retour à l'accueil
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeFAQ: null,
      faq: [
        {
          emoji: "📦",
          question: "Quels sont les délais de livraison ?",
          reponse:
            "Nos délais de livraison sont de 7 à 15 jours ouvrés selon votre localisation. Toutes nos commandes sont imprimées à la demande via notre partenaire Printify.",
        },
        {
          emoji: "🔄",
          question: "Puis-je retourner un article ?",
          reponse:
            "Vous disposez d’un délai de 14 jours après réception pour retourner un article, sauf pour les produits personnalisés qui ne sont pas remboursables.",
        },
        {
          emoji: "🛍",
          question: "Quels moyens de paiement acceptez-vous ?",
          reponse:
            "Nous acceptons les paiements par carte bancaire (Visa, Mastercard), PayPal et d'autres options sécurisées précisées lors du paiement.",
        },
        {
          emoji: "🌍",
          question: "Livrez-vous à l'international ?",
          reponse:
            "Oui, nous livrons dans de nombreux pays. Les frais de livraison varient selon la destination.",
        },
        {
          emoji: "🎁",
          question: "Proposez-vous des cartes cadeaux ?",
          reponse:
            "Pas encore, mais nous y travaillons ! Restez connecté pour être informé dès que c'est disponible.",
        },
      ],
    };
  },
  methods: {
    toggleFAQ(index) {
      this.activeFAQ = this.activeFAQ === index ? null : index;
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
