document.addEventListener('DOMContentLoaded', function() {
    let counter = 0;
    const counterDisplay = document.getElementById('counter');
    const evenOddDisplay = document.getElementById('even-odd');
    const historyList = document.getElementById('history-list');

    function updateCounter() {
        counterDisplay.textContent = counter;
        evenOddDisplay.textContent = counter % 2 === 0 ? 'Even' : 'Odd';
        evenOddDisplay.style.color = counter % 2 === 0 ? 'green' : 'red';
    }

    function addToHistory(value) {
        const listItem = document.createElement('li');
        listItem.textContent = value;
        historyList.prepend(listItem);
    }

    document.getElementById('increment-btn').addEventListener('click', function() {
        counter++;
        updateCounter();
        addToHistory(counter);
    });

    document.getElementById('reset-btn').addEventListener('click', function() {
        counter = 0;
        updateCounter();
        addToHistory(counter);
    });
});
