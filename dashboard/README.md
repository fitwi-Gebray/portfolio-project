# React Dashboard (Material UI + Recharts)

A modern **React dashboard application** built with **Material UI** and **Recharts**.  
It includes a responsive layout with a sidebar, topbar, theme settings, and data visualization charts.

---

## 🚀 Features

- 📊 Interactive charts using **Recharts**
- 🎨 Light / Dark theme toggle with **Material UI**
- 📁 Reusable **Dashboard Layout**
- 📱 Responsive design
- ⚡ Modern React architecture using **Context API**
- 🧩 Modular component structure

---

## 🛠 Tech Stack

- React
- Material UI (MUI)
- Recharts
- JavaScript (ES6+)

---

## 📂 Project Structure

```
src
│
├── components
│   ├── charts
│   │   └── SalesBarChart.jsx
│   │
│   ├── sidebar
│   │   └── Sidebar.jsx
│   │
│   └── topbar
│       └── Topbar.jsx
│
├── context
│   └── SettingsContext.jsx
│
├── layout
│   └── DashboardLayout.jsx
│
└── pages
    └── Dashboard.jsx
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

Navigate into the project folder:

```bash
cd your-repo-name
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run the Project

Start the development server:

```bash
npm start
```

The app will run on:

```
http://localhost:3000
```

---

## 📊 Example Chart

The dashboard includes data visualization such as:

- Weekly sales bar chart
- Responsive charts
- Tooltip interaction

Built using **Recharts**.

---

## 🎨 Theme Settings

The project uses a **global settings context** to control:

- Dark / Light mode
- App settings

Example:

```javascript
const { darkMode, setDarkMode } = useSettings();
```

---

## 🧱 Layout System

The dashboard layout includes:

```
Sidebar
Topbar
Main Content
```

Structure:

```
DashboardLayout
 ├── Sidebar
 ├── Topbar
 └── Page Content
```

---

## 📸 Screenshots

You can add screenshots here:

```
/screenshots/dashboard.png
```

Example:

```
![Dashboard Screenshot](./screenshots/dashboard.png)
```

---

## 📌 Future Improvements

- Authentication system
- API integration
- More charts and analytics
- Responsive mobile sidebar
- Notifications system

---

## 👤 Author

**Fitwi Gebray Teklemichael**

LinkedIn:  
https://www.linkedin.com/in/fitwi-gebray-teklemichael-4aa1a02a4/

---

## ⭐ Support

If you like this project, give it a **star ⭐ on GitHub**.
