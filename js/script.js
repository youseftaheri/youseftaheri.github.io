function changeLanguage(lang) {
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      el.textContent = translations[lang][key]; 
    });
  
    // Set direction for Persian (RTL)
    document.body.dir = lang === 'fa' ? 'rtl' : 'ltr';
    
    // Save preference
    localStorage.setItem('lang', lang);
  }
  
  // On page load
  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    changeLanguage(savedLang);
  });