// Keep direct local-file previews navigable without a web server.
if (location.protocol === 'file:') {
  for (const link of document.querySelectorAll('a[href]')) {
    const target = new URL(link.getAttribute('href'), location.href);
    if (target.protocol === 'file:' && target.pathname.endsWith('/')) {
      target.pathname += 'index.html';
      link.href = target.href;
    }
  }
}
