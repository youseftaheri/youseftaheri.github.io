const languageData = {
  'en': { flag: '🇬🇧', code: 'EN', name: 'English' },
  'de': { flag: '🇩🇪', code: 'DE', name: 'Deutsch' },
  'ar': { flag: '🇰🇼', code: 'AR', name: 'العربية' }
};

// Main language switching function
function changeLanguage(lang) {
  // Validate language selection
  if (!translations[lang]) lang = 'en';
  
  // Update all translatable elements
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Set RTL direction only for Arabic
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update language switcher display
  updateLanguageSwitcherUI(lang);
  
  // Save preference
  localStorage.setItem('lang', lang);
  
  // Dispatch event for other scripts to detect language change
  document.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
}

// Update the language switcher UI
function updateLanguageSwitcherUI(lang) {
  const langData = languageData[lang] || languageData['en'];
  const switcher = document.querySelector('.language-switcher');
  
  if (switcher) {
    switcher.querySelector('.flag').textContent = langData.flag;
    switcher.querySelector('.language-code').textContent = langData.code;
  }
}

// Toggle language dropdown menu
function toggleLanguageMenu() {
  document.querySelector('.language-switcher')?.classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.language-switcher')) {
    document.querySelector('.language-switcher')?.classList.remove('active');
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Load saved language or default to English
  const savedLang = localStorage.getItem('lang') || 'en';
  
  // Apply language settings
  changeLanguage(savedLang);
  
  // Set up event listeners for language buttons
  document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = option.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });
});

// Optional: Expose function to global scope for HTML onclick attributes
window.changeLanguage = changeLanguage;
window.toggleLanguageMenu = toggleLanguageMenu;