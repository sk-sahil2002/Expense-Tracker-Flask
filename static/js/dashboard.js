function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Initialize data
let incomeList = JSON.parse(localStorage.getItem("incomes")) || [];
let expenseList = JSON.parse(localStorage.getItem("expenses")) || [];

function addIncome() {
    const category = document.getElementById("incomeCategory").value;
    const amount = parseFloat(document.getElementById("incomeAmount").value);
    if (category && amount) {
        incomeList.push({ category, amount });
        localStorage.setItem("incomes", JSON.stringify(incomeList));
        render();
    }
}

function addExpense() {
    const category = document.getElementById("expenseCategory").value;
    const amount = parseFloat(document.getElementById("expenseAmount").value);
    if (category && amount) {
        expenseList.push({ category, amount });
        localStorage.setItem("expenses", JSON.stringify(expenseList));
        render();
    }
}

function render() {
    const entries = document.getElementById("entries");
    entries.innerHTML = '';

    let html = "<h3>Incomes</h3><ul>";
    incomeList.forEach((item, index) => {
        html += `<li>${item.category}: $${item.amount.toFixed(2)} <button onclick="removeIncome(${index})">X</button></li>`;
    });
    html += "</ul><h3>Expenses</h3><ul>";
    expenseList.forEach((item, index) => {
        html += `<li>${item.category}: $${item.amount.toFixed(2)} <button onclick="removeExpense(${index})">X</button></li>`;
    });
    html += "</ul>";
    entries.innerHTML = html;

    renderChart();
}

function removeIncome(index) {
    incomeList.splice(index, 1);
    localStorage.setItem("incomes", JSON.stringify(incomeList));
    render();
}

function removeExpense(index) {
    expenseList.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenseList));
    render();
}

function renderChart() {
    const ctx = document.getElementById("expenseChart").getContext("2d");
    if (window.pieChart) window.pieChart.destroy();

    const data = {
        labels: expenseList.map(e => e.category),
        datasets: [{
            label: 'Expenses',
            data: expenseList.map(e => e.amount),
            backgroundColor: ['#ff6384','#36a2eb','#cc65fe','#ffce56','#00a676','#ff9f40'],
        }]
    };

    window.pieChart = new Chart(ctx, {
        type: 'pie',
        data: data
    });
}

function exportCSV() {
    const allData = [['Type', 'Category', 'Amount']];
    incomeList.forEach(i => allData.push(['Income', i.category, i.amount]));
    expenseList.forEach(e => allData.push(['Expense', e.category, e.amount]));

    let csvContent = "data:text/csv;charset=utf-8," 
        + allData.map(e => e.join(",")).join("\n");

    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "expenses.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener("DOMContentLoaded", render);