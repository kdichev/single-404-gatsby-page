const path = require("path");
const locales = ["en", "da-dk", "bg-bg", "sv-se", "ro-ro"];
const defaultLocale = locales[0];
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.createPages = ({ actions }) => {
  // 1. Create index page from index template. Index page locale is the default locale ('en')
  actions.createPage({
    path: `/`,
    component: path.resolve(`./src/templates/index.tsx`),
    context: {
      locale: defaultLocale,
      locales,
    },
  });
  // 2. Create localised index pages per locale from index template
  locales.forEach((locale) => {
    const slugs = Array.from(
      { length: randomInteger(4995, 5000) },
      (v, i) => i
    );
    slugs.forEach((slug) => {
      actions.createPage({
        path: `/${locale}/${slug}`,
        component: path.resolve(`./src/templates/index.tsx`),
        context: {
          locale,
          locales,
        },
      });
    });
  });
  // 3. Create index 404 page from 404 page template
  actions.createPage({
    path: `/404.html`,
    component: path.resolve(`./src/templates/404.tsx`),
    context: { locale: defaultLocale, locales },
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions;
  if (page.path === "/dev-404-page/") {
    deletePage(page);
  } else {
    createPage(page);
  }
};
