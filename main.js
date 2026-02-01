
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersContainer = document.querySelector('.number-display');
    const themeSwitch = document.getElementById('checkbox');

    const generateLottoNumbers = () => {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    };

    const displayNumber = (number) => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = number;
        
        const color = getNumberColor(number);
        numberElement.style.backgroundColor = color;
        
        return numberElement;
    }

    const getNumberColor = (number) => {
        if (number <= 10) return '#f9b208'; // Yellow
        if (number <= 20) return '#3498db'; // Blue
        if (number <= 30) return '#e74c3c'; // Red
        if (number <= 40) return '#2ecc71'; // Green
        return '#9b59b6'; // Purple
    };

    const displayNumbers = (numbers) => {
        numbersContainer.innerHTML = '';
        numbers.forEach(number => {
            numbersContainer.appendChild(displayNumber(number));
        });
    };

    generateBtn.addEventListener('click', () => {
        const lottoNumbers = generateLottoNumbers();
        displayNumbers(lottoNumbers);
    });

    // Theme switcher logic
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeSwitch.checked = true;
        }
    }

    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // Initial generation
    displayNumbers(generateLottoNumbers());
});
