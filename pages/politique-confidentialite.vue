<template>
  <div class="relative min-h-screen">
    <!-- 🌍 Appliquer le background avec traces de pneus -->
    <div class="absolute inset-0 bg-about"></div>

    <div class="relative min-h-screen py-16 px-8 flex flex-col items-center">
      <div
        class="max-w-4xl w-full bg-white-translucent p-8 shadow-lg rounded-lg"
      >
        <!-- Titre principal -->
        <h1 class="text-4xl font-bold text-center text-secondary mb-8">
          Politique de Confidentialité
        </h1>

        <!-- Introduction -->
        <p class="text-center text-gray-600 italic mb-8">
          Dernière mise à jour : 29-12-2024 <br />
          Chez Oh Mamma Mia, nous prenons très au sérieux la protection de vos
          données personnelles. Cette page vous explique comment nous collectons
          et utilisons vos informations.
        </p>

        <!-- Sections -->
        <div class="space-y-8">
          <!-- Responsable du traitement -->
          <section>
            <h2 class="text-2xl font-semibold text-primary mb-2">
              1. Responsable du traitement des données
            </h2>
            <div class="bg-gray-50 p-4 rounded-lg shadow-md">
              <p><strong>Nom de l’entreprise :</strong> Oh Mamma Mia</p>
              <p><strong>Adresse :</strong> Rue de la Limite 6, 1300 Wavre</p>
              <p>
                <strong>Numéro d’entreprise :</strong> [numéro d’entreprise]
              </p>
              <p>
                <strong>Email :</strong>
                <a
                  href="mailto:jesaispasencore@gmail.com"
                  class="text-primary hover:underline"
                >
                  jesaispasencore@gmail.com
                </a>
              </p>
            </div>
          </section>

          <!-- Données collectées -->
          <section>
            <h2 class="text-2xl font-semibold text-primary mb-2">
              2. Données collectées
            </h2>
            <ul class="list-disc list-inside text-gray-700">
              <li>
                <strong>Données personnelles :</strong> Nom, email, adresse,
                numéro de téléphone.
              </li>
              <li>
                <strong>Données de connexion :</strong> Adresse IP, navigateur,
                pages visitées.
              </li>
              <li>
                <strong>Données liées aux commandes :</strong> Historique
                d'achats et préférences.
              </li>
            </ul>
          </section>

          <!-- Finalités de la collecte -->
          <section>
            <h2 class="text-2xl font-semibold text-primary mb-2">
              3. Finalités de la collecte des données
            </h2>
            <ul class="list-disc list-inside text-gray-700">
              <li>
                <strong>Traitement des commandes :</strong> Expédition et suivi.
              </li>
              <li>
                <strong>Marketing :</strong> Envoi d'offres promotionnelles si
                vous avez donné votre consentement.
              </li>
              <li>
                <strong>Amélioration du site :</strong> Analyse des
                comportements pour optimiser notre service.
              </li>
            </ul>
          </section>

          <!-- Partage des données -->
          <section>
            <h2 class="text-2xl font-semibold text-primary mb-2">
              4. Partage des données
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Nous ne partageons vos données qu'avec des tiers essentiels
              (livraison, paiement sécurisé). Nous nous conformons à toutes les
              obligations légales.
            </p>
          </section>

          <!-- Sécurité des données -->
          <section>
            <h2 class="text-2xl font-semibold text-primary mb-2">
              5. Sécurité des données
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Vos données sont stockées en toute sécurité et protégées contre
              tout accès non autorisé.
            </p>
          </section>

          <!-- Droits des utilisateurs -->
          <section>
            <h2 class="text-2xl font-semibold text-primary mb-2">
              6. Vos droits
            </h2>
            <ul class="list-disc list-inside text-gray-700">
              <li>
                <strong>Droit d’accès :</strong> Consultez vos données
                personnelles.
              </li>
              <li>
                <strong>Droit de rectification :</strong> Corrigez vos
                informations.
              </li>
              <li>
                <strong>Droit d’effacement :</strong> Demandez la suppression de
                vos données.
              </li>
              <li>
                <strong>Droit d’opposition :</strong> Refusez l’utilisation de
                vos données pour le marketing.
              </li>
            </ul>
            <p class="mt-3">
              Pour exercer vos droits, contactez-nous à :
              <a
                href="mailto:jesaispasencore@gmail.com"
                class="text-primary hover:underline"
              >
                jesaispasencore@gmail.com </a
              >.
            </p>
          </section>

          <!-- Cookies -->
          <section>
            <h2 class="text-2xl font-semibold text-primary mb-2">
              7. Utilisation des Cookies
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience
              utilisateur. Vous pouvez configurer votre navigateur pour les
              refuser. Consultez notre
              <a href="#" class="text-primary hover:underline"
                >Politique de Cookies</a
              >.
            </p>
          </section>

          <!-- Modifications -->
          <section>
            <h2 class="text-2xl font-semibold text-primary mb-2">
              8. Modifications de la Politique
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Nous pouvons mettre à jour cette politique à tout moment.
              Consultez cette page régulièrement.
            </p>
          </section>

          <!-- Contact -->
          <section>
            <h2 class="text-2xl font-semibold text-primary mb-2">9. Contact</h2>
            <p class="text-gray-700 leading-relaxed">
              Pour toute question relative à notre politique de confidentialité,
              contactez-nous :
            </p>
            <p class="text-center mt-3">
              📩
              <a
                href="mailto:jesaispasencore@gmail.com"
                class="text-primary hover:underline"
              >
                jesaispasencore@gmail.com
              </a>
              📍 Rue de la Limite 6, 1300 Wavre
            </p>
          </section>
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

<style>
/* 🌍 Appliquer le background "traces de pneus" */
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

/* 🎨 Fond translucide pour le contenu */
.bg-white-translucent {
  background: rgba(255, 255, 255, 0.85); /* Blanc avec une opacité de 85% */
  backdrop-filter: blur(5px);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
