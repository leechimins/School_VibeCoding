// Shared localStorage keys
const STORAGE_KEYS = {
  theme: 'vibecoding_theme',
  avatar: 'vibecoding_avatar',
  profileName: 'vibecoding_profileName',
  profileBio: 'vibecoding_profileBio',
  likes: 'vibecoding_likes',
  guestbook: 'vibecoding_guestbook',
  feelDiary: 'vibecoding_feelDiary',
  expenses: 'vibecoding_expenses',
};

// localStorage helpers
function saveState(key, value) {
  const raw = typeof value === 'string' ? value : JSON.stringify(value);
  localStorage.setItem(key, raw);
}

function loadState(key, fallback) {
  const raw = localStorage.getItem(key);
  return raw === null ? fallback : raw;
}

function loadJSON(key, fallback) {
  const raw = localStorage.getItem(key);
  if (raw === null) return fallback;
  try {
    return JSON.parse(raw);
  } catch (e) {
    return fallback;
  }
}

// Theme Switcher (shared across pages)
function setTheme(theme, el) {
  if (theme === 'default') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
  saveState(STORAGE_KEYS.theme, theme);
  document.querySelectorAll('.theme-dot').forEach(dot => dot.classList.remove('active'));
  if (el) el.classList.add('active');
}

function initThemeDots() {
  const theme = loadState(STORAGE_KEYS.theme, 'default');
  document.querySelectorAll('.theme-dot').forEach(dot => {
    dot.classList.toggle('active', dot.dataset.themeValue === theme);
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
