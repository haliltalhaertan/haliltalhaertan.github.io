// Preserve bookmarks from the former single-page homepage.
const researchSections = new Set(["papers","updates","autogenesis","autogenesis-heading","autogenesis-2026-11","llmzip","llmzip-heading","llmzip-2026-11","zipgenesis","zipgenesis-heading","zipgenesis-2026-11","contributions"]);
function followLegacyLink() {
  const section = location.hash.slice(1);
  const index = location.protocol === 'file:' ? 'index.html' : '';
  if (section === 'experience' || section === 'experience-heading') {
    location.replace(new URL('work/' + index + '#experience', location.href).href);
  } else if (researchSections.has(section)) {
    location.replace(new URL('researchs/' + index + location.hash, location.href).href);
  }
}
followLegacyLink();
addEventListener('hashchange', followLegacyLink);
