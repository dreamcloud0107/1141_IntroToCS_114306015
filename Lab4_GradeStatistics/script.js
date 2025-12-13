const mathInput = document.getElementById("mathInput");
const englishInput = document.getElementById("englishInput");
const submitBtn = document.getElementById("submitBtn");
const tableBody = document.getElementById("tableBody");

const mathAvgCell = document.getElementById("mathAvg");
const englishAvgCell = document.getElementById("englishAvg");
const overallAvgCell = document.getElementById("overallAvg");

let rowCount = 0;

submitBtn.addEventListener("click", function () {
    const math = Number(mathInput.value);
    const english = Number(englishInput.value);

    if (isNaN(math) || isNaN(english)) {
        alert("Please enter valid numbers");
        return;
    }

    rowCount++;

    const avg = ((math + english) / 2).toFixed(2);

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${rowCount}</td>
        <td class="math">${math}</td>
        <td class="english">${english}</td>
        <td>${avg}</td>
    `;

    tableBody.appendChild(row);

    updateColumnAverages();

    mathInput.value = "";
    englishInput.value = "";
});

function updateColumnAverages() {
    const mathCells = document.getElementsByClassName("math");
    const englishCells = document.getElementsByClassName("english");

    let mathSum = 0;
    let englishSum = 0;

    for (let i = 0; i < mathCells.length; i++) {
        mathSum += Number(mathCells[i].textContent);
        englishSum += Number(englishCells[i].textContent);
    }

    const mathAvg = (mathSum / mathCells.length).toFixed(2);
    const englishAvg = (englishSum / englishCells.length).toFixed(2);
    const overallAvg = ((mathSum + englishSum) / (mathCells.length * 2)).toFixed(2);

    mathAvgCell.textContent = mathAvg;
    englishAvgCell.textContent = englishAvg;
    overallAvgCell.textContent = overallAvg;
}
