// ������������� Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();
tg.setHeaderColor('#ffffff');
tg.setBackgroundColor('#f8f9fa');

// �������� ��������� ����
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('theme-dark');
}

// ������������ ����
function toggleTheme() {
    document.body.classList.toggle('theme-dark');
    // ��������� ������������ � localStorage
    if (document.body.classList.contains('theme-dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// ��������������� ���� ��� ��������
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('theme-dark');
    }
});

// �������� ������� ������ (��������)
function openOrderDetail(orderId) {
    tg.showAlert(`������� ������ ������ #${orderId}`);
    // ����� ����� ����� ��������� ���� ��� ������� �� ����� ��������
}

// �������� ��������� ��������
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.order-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

console.log('WebApp �������� � ����� � ������!');