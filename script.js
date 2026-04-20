// Configurações
const COUNTDOWN_MINUTES = 15;
const NOTIFICATION_INTERVAL = 8000; // 8 segundos

// Dados para os popups de vendas
const salesData = [
    { name: "Carlos S.", city: "São Paulo", time: "2 min" },
    { name: "Mariana L.", city: "Rio de Janeiro", time: "agora mesmo" },
    { name: "Roberto F.", city: "Curitiba", time: "5 min" },
    { name: "Juliana M.", city: "Belo Horizonte", time: "1 min" },
    { name: "Fernando P.", city: "Porto Alegre", time: "4 min" },
    { name: "Aline V.", city: "Salvador", time: "agora mesmo" },
    { name: "Ricardo T.", city: "Brasília", time: "3 min" }
];

// Cronômetro
function startCountdown() {
    let time = COUNTDOWN_MINUTES * 60;
    const display = document.getElementById('timer');
    
    if (!display) return;

    const timerInterval = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        display.textContent = `${minutes}:${seconds}`;

        if (--time < 0) {
            time = COUNTDOWN_MINUTES * 60; // Reinicia para manter a urgência
        }
    }, 1000);
}

// Notificações de Venda
function showSalesNotification() {
    const container = document.getElementById('notification-container');
    if (!container) return;

    setInterval(() => {
        const sale = salesData[Math.floor(Math.random() * salesData.length)];
        
        const notification = document.createElement('div');
        notification.className = 'sale-notification';
        notification.innerHTML = `
            <div class="sale-icon">✓</div>
            <div class="sale-content">
                <p><strong>${sale.name}</strong> de ${sale.city}</p>
                <span>Acabou de adquirir o acesso!</span>
                <small>${sale.time}</small>
            </div>
        `;

        container.appendChild(notification);

        // Remover após 4 segundos
        setTimeout(() => {
            notification.classList.add('hide');
            setTimeout(() => notification.remove(), 500);
        }, 4000);

    }, NOTIFICATION_INTERVAL);
}

// Iniciar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    startCountdown();
    showSalesNotification();
});
