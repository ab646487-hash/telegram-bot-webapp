// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();
tg.setHeaderColor('#ffffff');
tg.setBackgroundColor('#f8f9fa');

// Проверка системной темы
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('theme-dark');
}

// Переключение темы
function toggleTheme() {
    document.body.classList.toggle('theme-dark');
    // Сохраняем предпочтение в localStorage
    if (document.body.classList.contains('theme-dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Восстанавливаем тему при загрузке
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('theme-dark');
    }
});

// Открытие деталей заказа (заглушка)
function openOrderDetail(orderId) {
    tg.showAlert(`Открыть детали заказа #${orderId}`);
    // Позже здесь будет модальное окно или переход на новую страницу
}

// Анимация появления карточек
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.order-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

console.log('WebApp загружен и готов к работе!');