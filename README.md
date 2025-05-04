
# 🧾 Local Expense Tracker (No DB)

A modern, responsive web-based **Expense Tracker** built with **Flask + JavaScript**, storing all data in the **browser's localStorage**. No backend database required!

## 🚀 Features

- ✅ Add & remove **incomes** and **expenses**
- 📊 **Pie chart** visualization with Chart.js
- 💾 **Export** your data to CSV
- 🌙 Dark Mode toggle
- 🧭 Navigation: Home, Dashboard, About, Contact
- ⚡ 100% **Client-side** data management via `localStorage`

## 📁 Project Structure

Local_expense_tracker/
│
├── app.py # Flask app (serves HTML/CSS/JS)
├── templates/ # HTML pages (Jinja2)
│ ├── index.html
│ ├── dashboard.html
│ ├── about.html
│ └── contact.html
│
├── static/
│ ├── css/
│ │ └── styles.css # Main CSS
│ └── js/
│ └── dashboard.js # Handles all logic (localStorage, Chart.js, export)


## 🧪 How to Run

**Install Flask** (if not installed):

   install requiremnts
   pip install flask

   Run
   python app.py

Visit the Browser Local
http://127.0.0.1:5000/


📤 Export
Use the "Export CSV" button on the dashboard to download all your data in a spreadsheet-compatible format.

📚 Pages
Home – User inputs name

Dashboard – Track and visualize expenses/incomes

About – Info about the app

Contact – Contact form UI

✨ Future Ideas
Add category icons (car, home, food)

Budget warnings / savings goals

Mobile installable PWA version

🛠 Built With
🐍 Flask (Python)

🎨 HTML5 + CSS3

📜 JavaScript + localStorage

📊 Chart.js


