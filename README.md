# App Marketplace Web Application

A responsive React web application to **browse, search, install, and manage mobile apps**. The project features live search, sorting, charts, and localStorage support for installed apps.

---

## Key Features
- **Home Page:** Banner, stats cards, top 8 apps, and a “Show All” button  
- **All Apps Page:** Live search, total app count, app cards showing title, image, downloads, and rating  
- **App Details Page:** App info, install button with localStorage support, success toast, responsive review chart using Recharts, and description  
- **My Installation Page:** Displays installed apps, uninstall functionality, and sorting by download count  
- **Error & Not Found Pages:** Custom 404 page and “No App Found” messages  
- **Loading Animations:** Shown during page navigation and search operations  

---

## Technologies
- **Frontend:** React.js, Tailwind CSS  
- **Routing:** React Router v6  
- **Charts:** Recharts  
- **Notifications:** react-toastify  
- **Storage:** localStorage  
- **State Management:** useState & useEffect  

---

## Features Overview
- Live search with debounce  
- App installation and uninstall with persistent localStorage state  
- Sorting apps by download count (High → Low / Low → High)  
- Responsive design for all devices  
- Smooth navigation with loader animations and success toasts  

---

## Getting Started
1. Clone the repository:
```bash
git clone https://github.com/yourusername/app-marketplace.git
cd app-marketplace
