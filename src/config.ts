export const SITE = {
  title: "Cakecutter",
  description:
    "Cakecutter is a powerful tool for setting up a basic app of any type/language/framework. Cakes (templates) are capable of asking questions and creating files and running commands based on the answers.",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

export const KNOWN_LANGUAGES = {
  English: "en",
  Spanish: "es",
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
export const COMMUNITY_INVITE_URL = `https://discord.gg/dHygyg9rN5`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
  en: [
    { text: "", header: true },
    { text: "Basics", header: true },
    { text: "Introduction", link: "en/introduction" },
    { text: "Installation", link: "en/installation" },
    { text: "Using Cakes", link: "en/using-cakes" },
    { text: "Creating Cakes", link: "en/creating-cakes" },
    { text: "Advanced Usage", link: "en/advanced-usage" },
    { text: "Example", link: "en/example" },
    { text: "Publishing Cakes", link: "en/publishing-cakes" },
  ],
  es: [
    { text: "", header: true },
    { text: "Información esencial", header: true },
    { text: "Introducción", link: "es/introduction" },
    { text: "Instalación", link: "es/installation" },
    { text: "Usando Cakes", link: "es/using-cakes" },
    { text: "Creando Cakes", link: "es/creating-cakes" },
    { text: "Uso Avanzado", link: "es/advanced-usage" },
    { text: "Ejemplo", link: "es/example" },
    { text: "Publicando Cakes", link: "es/publishing-cakes" },
  ],
};
