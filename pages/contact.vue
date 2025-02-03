<template>
  <div class="bg-gray-100 text-gray-800 min-h-screen py-16 px-8">
    <div class="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      <!-- Titre principal -->
      <h1 class="text-4xl font-bold text-center text-secondary mb-8">
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
        <!-- Question 1 -->
        <div class="border rounded-lg overflow-hidden shadow-sm">
          <button
            class="w-full text-left px-4 py-3 bg-gray-200 font-semibold focus:outline-none"
            @click="toggleFAQ(1)"
          >
            📦 Quels sont les délais de livraison ?
          </button>
          <div v-if="activeFAQ === 1" class="p-4 bg-white">
            Nos délais de livraison sont de 7 à 15 jours ouvrés selon votre
            localisation. Toutes nos commandes sont imprimées à la demande via
            notre partenaire Printify.
          </div>
        </div>

        <!-- Question 2 -->
        <div class="border rounded-lg overflow-hidden shadow-sm">
          <button
            class="w-full text-left px-4 py-3 bg-gray-200 font-semibold focus:outline-none"
            @click="toggleFAQ(2)"
          >
            🔄 Puis-je retourner un article ?
          </button>
          <div v-if="activeFAQ === 2" class="p-4 bg-white">
            Vous disposez d’un délai de 14 jours après réception pour retourner
            un article, sauf pour les produits personnalisés qui ne sont pas
            remboursables.
          </div>
        </div>

        <!-- Question 3 -->
        <div class="border rounded-lg overflow-hidden shadow-sm">
          <button
            class="w-full text-left px-4 py-3 bg-gray-200 font-semibold focus:outline-none"
            @click="toggleFAQ(3)"
          >
            🛍 Quels moyens de paiement acceptez-vous ?
          </button>
          <div v-if="activeFAQ === 3" class="p-4 bg-white">
            Nous acceptons les paiements par carte bancaire (Visa, Mastercard),
            PayPal et d'autres options sécurisées précisées lors du paiement.
          </div>
        </div>

        <!-- Question 4 -->
        <div class="border rounded-lg overflow-hidden shadow-sm">
          <button
            class="w-full text-left px-4 py-3 bg-gray-200 font-semibold focus:outline-none"
            @click="toggleFAQ(4)"
          >
            🌍 Livrez-vous à l'international ?
          </button>
          <div v-if="activeFAQ === 4" class="p-4 bg-white">
            Oui, nous livrons dans de nombreux pays. Les frais de livraison
            varient selon la destination.
          </div>
        </div>

        <!-- Question 5 -->
        <div class="border rounded-lg overflow-hidden shadow-sm">
          <button
            class="w-full text-left px-4 py-3 bg-gray-200 font-semibold focus:outline-none"
            @click="toggleFAQ(5)"
          >
            🎁 Proposez-vous des cartes cadeaux ?
          </button>
          <div v-if="activeFAQ === 5" class="p-4 bg-white">
            Pas encore, mais nous y travaillons ! Restez connecté pour être
            informé dès que c'est disponible.
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
</template>

<script>
export default {
  data() {
    return {
      activeFAQ: null, // Stocke la question ouverte
    };
  },
  methods: {
    toggleFAQ(index) {
      this.activeFAQ = this.activeFAQ === index ? null : index;
    },
  },
};
</script>
