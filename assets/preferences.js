(() => {
  const state=window.sitePreferences;
  const preferences=document.querySelector('.site-preferences');
  const languageToggle=document.getElementById('language-toggle');
  const themeToggle=document.getElementById('theme-toggle');
  const languagePanel=document.getElementById('language-panel');
  const themePanel=document.getElementById('theme-panel');
  const labels={
    en:['Language','Appearance','System','Light','Dark'],
    tr:['Dil','Görünüm','Sistem','Açık','Koyu'],
    de:['Sprache','Darstellung','System','Hell','Dunkel'],
    zh:['语言','外观','跟随系统','浅色','深色'],
    ru:['Язык','Оформление','Системное','Светлое','Тёмное'],
    ja:['言語','表示','システム','ライト','ダーク'],
    ko:['언어','화면 모드','시스템','라이트','다크'],
    es:['Idioma','Apariencia','Sistema','Claro','Oscuro']
  };
  const original=new Map();
  for(const element of document.querySelectorAll('[data-i18n]'))original.set(element,element.innerHTML);
  const attributeOriginals=[];
  for(const attr of ['alt','aria-label','content'])for(const element of document.querySelectorAll('[data-i18n-'+attr+']'))attributeOriginals.push({element,attr,key:element.getAttribute('data-i18n-'+attr),value:element.getAttribute(attr)});
  const decode=value=>{const area=document.createElement('textarea');area.innerHTML=value;return area.value;};
  const dates={
    'Jan 2023 — Present':['Jan 2023 — Present','Oca 2023 — Günümüz','Jan. 2023 — Heute','2023年1月 — 至今','январь 2023 — настоящее время','2023年1月 — 現在','2023년 1월 — 현재','ene. 2023 — actualidad'],
    'Jul 2021 — Sep 2022':['Jul 2021 — Sep 2022','Tem 2021 — Eyl 2022','Juli 2021 — Sept. 2022','2021年7月 — 2022年9月','июль 2021 — сентябрь 2022','2021年7月 — 2022年9月','2021년 7월 — 2022년 9월','jul. 2021 — sept. 2022'],
    'Jul — Aug 2019':['Jul — Aug 2019','Tem — Ağu 2019','Juli — Aug. 2019','2019年7月 — 8月','июль — август 2019','2019年7月 — 8月','2019년 7월 — 8월','jul. — ago. 2019']
  };
  const dateLocales=['en','tr','de','zh','ru','ja','ko','es'];
  function remember(key,value){try{localStorage.setItem(key,value);}catch{}}
  function updateQuery(key,value){
    const url=new URL(location.href);
    if(url.searchParams.has(key)){url.searchParams.set(key,value);try{history.replaceState(null,'',url.href);}catch{}}
  }
  function localLinks(){
    if(location.protocol!=='file:')return;
    for(const link of document.querySelectorAll('a[href]')){
      const target=new URL(link.getAttribute('href'),location.href);
      if(target.protocol!=='file:')continue;
      if(target.pathname.endsWith('/'))target.pathname+='index.html';
      target.searchParams.set('lang',state.language);target.searchParams.set('theme',state.preference);link.href=target.href;
    }
  }
  function applyLanguage(language){
    state.language=language;
    const dictionary=window.siteTranslations[language]||{};
    for(const [element,english] of original)element.innerHTML=language==='en'?english:(dictionary[element.dataset.i18n]||english);
    for(const item of attributeOriginals)item.element.setAttribute(item.attr,language==='en'?item.value:decode(dictionary[item.key]||item.value));
    for(const element of document.querySelectorAll('[data-timeline-date]')){
      const source=decode(element.dataset.timelineDate);
      element.textContent=dates[source]?.[dateLocales.indexOf(language)]||source;
    }
    document.documentElement.lang=language==='zh'?'zh-CN':language;
    const [langLabel,appearance,system,light,dark]=labels[language];
    for(const [key,value] of Object.entries({language:langLabel,appearance,system,light,dark}))for(const element of document.querySelectorAll('[data-ui="'+key+'"]'))element.textContent=value;
    languageToggle.setAttribute('aria-label',langLabel);languageToggle.title=langLabel;
    languagePanel.setAttribute('aria-label',langLabel);
    themeToggle.setAttribute('aria-label',appearance);themePanel.setAttribute('aria-label',appearance);
    for(const button of languagePanel.querySelectorAll('[data-language]'))button.setAttribute('aria-checked',String(button.dataset.language===language));
    updateThemeIcon();
    remember('hte-language',language);localLinks();
    document.dispatchEvent(new Event('site:languagechange'));
  }
  function applyTheme(preference){
    state.preference=preference;
    const theme=preference==='system'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):preference;
    document.documentElement.dataset.theme=theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='dark'?'#101c22':'#f5f6f2');
    remember('hte-theme',preference);localLinks();
    updateThemeIcon();
  }
  function updateThemeIcon(){
    for(const icon of themeToggle.querySelectorAll('[data-theme-icon]'))icon.toggleAttribute('hidden',icon.dataset.themeIcon!==state.preference);
    for(const button of themePanel.querySelectorAll('[data-theme]'))button.setAttribute('aria-checked',String(button.dataset.theme===state.preference));
    const list=labels[state.language];
    themeToggle.title=list[1]+': '+list[{system:2,light:3,dark:4}[state.preference]];
  }
  function closePanels(restoreFocus=false){
    for(const [trigger,panel] of [[languageToggle,languagePanel],[themeToggle,themePanel]]){
      if(!panel.hidden&&restoreFocus)trigger.focus();
      panel.hidden=true;trigger.setAttribute('aria-expanded','false');
    }
  }
  function openPanel(trigger,panel){
    const wasOpen=!panel.hidden;
    closePanels();
    if(wasOpen)return;
    panel.hidden=false;trigger.setAttribute('aria-expanded','true');
    (panel.querySelector('[aria-checked="true"]')||panel.querySelector('button')).focus();
  }
  for(const [trigger,panel] of [[languageToggle,languagePanel],[themeToggle,themePanel]]){
    trigger.addEventListener('click',()=>openPanel(trigger,panel));
    trigger.addEventListener('keydown',event=>{
      if(event.key==='ArrowDown'||event.key==='ArrowUp'){event.preventDefault();if(panel.hidden)openPanel(trigger,panel);}
    });
    panel.addEventListener('keydown',event=>{
      const items=[...panel.querySelectorAll('button')];
      const index=items.indexOf(document.activeElement);
      if(['ArrowDown','ArrowUp','Home','End'].includes(event.key)){
        event.preventDefault();
        const next=event.key==='Home'?0:event.key==='End'?items.length-1:(index+(event.key==='ArrowDown'?1:-1)+items.length)%items.length;
        items[next].focus();
      }
    });
  }
  for(const button of languagePanel.querySelectorAll('[data-language]'))button.addEventListener('click',()=>{
    applyLanguage(button.dataset.language);updateQuery('lang',state.language);closePanels(true);
  });
  for(const button of themePanel.querySelectorAll('[data-theme]'))button.addEventListener('click',()=>{
    applyTheme(button.dataset.theme);updateQuery('theme',state.preference);closePanels(true);
  });
  document.addEventListener('pointerdown',event=>{if(!preferences.contains(event.target))closePanels();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'||event.key==='Tab')closePanels(true);});
  preferences.addEventListener('focusout',event=>{if(event.relatedTarget&&!preferences.contains(event.relatedTarget))closePanels();});
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{if(state.preference==='system')applyTheme('system');});
  applyLanguage(state.language);applyTheme(state.preference);
  document.documentElement.dataset.preferencesReady='true';
})();
