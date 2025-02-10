import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        external: ["/images/logo.png"], // Ajoute ton image ici
      },
    },
  },
  nitro: {
    serveStatic: true, // Permet à Nitro de bien gérer les fichiers dans /public
    externals: {
      traceInclude: ["public/images/logo.png"], // Force l'inclusion de l'image dans le build
    },
  },
});
