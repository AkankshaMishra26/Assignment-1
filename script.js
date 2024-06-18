function updatePercentages(button) {
    const percentageA = document.getElementById('percentageA');
    const percentageB = document.getElementById('percentageB');
    const percentageC = document.getElementById('percentageC');

    if (button === 'A') {
        percentageA.textContent = 'A: 100%';
        percentageB.textContent = 'B: 0%';
        percentageC.textContent = 'C: 0%';
    } else if (button === 'B') {
        percentageA.textContent = 'A: 50%';
        percentageB.textContent = 'B: 50%';
        percentageC.textContent = 'C: 0%';
    } else if (button === 'C') {
        percentageA.textContent = 'A: 33%';
        percentageB.textContent = 'B: 33%';
        percentageC.textContent = 'C: 33%';
    }
}
