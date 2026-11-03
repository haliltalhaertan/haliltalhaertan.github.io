// Apply the saved appearance before the stylesheet paints the page.
(() => {
  const supported=['en','de','tr','zh','ru','ja','ko','es'];
  let savedLang=null,savedTheme=null;
  try{savedLang=localStorage.getItem('hte-language');savedTheme=localStorage.getItem('hte-theme');}catch{}
  const query=new URLSearchParams(location.search);
  const browserLang=(navigator.language||'en').toLowerCase().split('-')[0];
  const language=[query.get('lang'),savedLang,browserLang,'en'].find(l=>supported.includes(l));
  const preference=[query.get('theme'),savedTheme,'system'].find(t=>['system','light','dark'].includes(t));
  const theme=preference==='system'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):preference;
  document.documentElement.dataset.theme=theme;
  window.sitePreferences={language,preference};
})();
