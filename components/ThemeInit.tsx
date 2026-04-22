// Script inline sans flash (FOUC) — applique le thème et les préférences
// d'accessibilité dès le premier paint, avant l'hydratation React.
export function ThemeInit() {
  const code = `
    try {
      var d = document.documentElement;
      var t = localStorage.getItem('apb-theme');
      var systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = t === 'dark' || t === 'light' ? t : (systemDark ? 'dark' : 'light');
      d.dataset.theme = theme;
      var a11y = localStorage.getItem('apb-a11y');
      if (a11y) {
        try {
          var p = JSON.parse(a11y);
          if (p.fontSize) d.style.setProperty('--a11y-font-scale', String(p.fontSize));
          if (p.contrast === 'high') d.dataset.contrast = 'high';
          if (p.dyslexia) d.dataset.dyslexia = 'on';
          if (p.motion === 'reduced') d.dataset.motion = 'reduced';
          if (p.underlineLinks) d.dataset.underlineLinks = 'on';
          if (p.letterSpacing) d.style.setProperty('--a11y-letter-spacing', p.letterSpacing + 'em');
        } catch(e){}
      }
    } catch(e){}
  `;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
