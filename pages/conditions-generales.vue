<template>
  <div class="bg-gray-100 text-gray-800 min-h-screen py-16 px-8">
    <div class="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      <!-- Titre principal -->
      <h1 class="text-4xl font-bold text-center text-secondary mb-8">
        Conditions Générales de Vente
      </h1>

      <!-- Introduction -->
      <p class="text-center text-gray-600 italic mb-8">
        Bienvenue sur Oh Mamma Mia ! En passant commande, vous acceptez nos
        conditions générales de vente ainsi que celles de notre partenaire
        Printify.
      </p>

      <!-- Section 1: Préambule -->
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-primary mb-2">1. Préambule</h2>
        <p class="text-gray-700 leading-relaxed">
          Les présentes CGV encadrent les relations contractuelles entre Oh
          Mamma Mia et toute personne effectuant un achat sur notre site.
        </p>
        <div class="bg-gray-50 p-4 rounded-lg mt-3 shadow-md">
          <p><strong>Nom de l’entreprise :</strong> Oh Mamma Mia</p>
          <p><strong>Adresse :</strong> Rue de la Limite 6, 1300 Wavre</p>
          <p>
            <strong>Contact :</strong>
            <a
              href="mailto:jesaispas@gmail.com"
              class="text-primary hover:underline"
              >jesaispas@gmail.com</a
            >
            / 012 345 678
          </p>
          <p><strong>Numéro d’immatriculation :</strong> [à compléter]</p>
        </div>
        <p class="mt-3 text-sm">
          Pour toutes questions liées à la production ou livraison, consultez
          les CGV de Printify :
          <a
            href="https://printify.com/legal/terms-of-service/"
            target="_blank"
            class="text-primary hover:underline"
          >
            CGV de Printify </a
          >.
        </p>
      </div>

      <!-- Section 2: Produits et disponibilité -->
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-primary mb-2">
          2. Produits et Disponibilité
        </h2>
        <p class="text-gray-700 leading-relaxed">
          Nos produits (vêtements, mugs, tote bags) sont imprimés à la demande
          via Printify. Les descriptions et photos sont indicatives, des
          variations peuvent exister selon l’écran utilisé.
        </p>
      </div>

      <!-- Section 3: Prix et paiement -->
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-primary mb-2">
          3. Prix et Paiement
        </h2>
        <ul class="list-disc list-inside text-gray-700">
          <li>
            <strong>Prix affichés :</strong> En euros (€), TVA incluse si
            applicable.
          </li>
          <li>
            <strong>Modes de paiement :</strong> Carte bancaire, PayPal et
            options sécurisées.
          </li>
          <li>
            <strong>Sécurisation :</strong> Transactions protégées par cryptage.
          </li>
        </ul>
      </div>

      <!-- Section 4: Livraison -->
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-primary mb-2">4. Livraison</h2>
        <p class="text-gray-700 leading-relaxed">
          Production et expédition gérées par Printify. Délai moyen : 7 à 15
          jours ouvrés.
        </p>
      </div>

      <!-- Section 5: Retours et remboursements -->
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-primary mb-2">
          5. Retours et Remboursements
        </h2>
        <p class="text-gray-700 leading-relaxed">
          Droit de rétractation sous 14 jours (sauf produits personnalisés).
          Frais de retour à votre charge sauf produit défectueux.
        </p>
      </div>

      <!-- Section 6: Garanties et responsabilités -->
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-primary mb-2">
          6. Garanties et Responsabilités
        </h2>
        <p class="text-gray-700 leading-relaxed">
          Garantie légale de conformité et contre les vices cachés.
        </p>
      </div>

      <!-- Section 7: Protection des données -->
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-primary mb-2">
          7. Protection des Données
        </h2>
        <p class="text-gray-700 leading-relaxed">
          Nous protégeons vos données et ne les partageons qu’avec Printify pour
          assurer la production et la livraison.
        </p>
      </div>

      <!-- Section 8: Litiges -->
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-primary mb-2">8. Litiges</h2>
        <p class="text-gray-700 leading-relaxed">
          En cas de différend, nous privilégions une solution amiable avant
          toute procédure judiciaire.
        </p>
      </div>

      <!-- Section 9: Modifications -->
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-primary mb-2">
          9. Modifications des CGV
        </h2>
        <p class="text-gray-700 leading-relaxed">
          Ces conditions peuvent être modifiées à tout moment. Les CGV en
          vigueur sont celles au moment de votre commande.
        </p>
      </div>

      <!-- Contact -->
      <div class="mt-6 text-center">
        <p>
          📩 Une question ? Contactez-nous :
          <a
            href="mailto:jesaispas@gmail.com"
            class="text-primary hover:underline"
            >jesaispas@gmail.com</a
          >
        </p>
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
