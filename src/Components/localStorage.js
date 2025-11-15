const getStoredApp= () => {
    const storedAppsSTR = localStorage.getItem("App-list");

    if (storedAppsSTR) {
        const storedAppData = JSON.parse(storedAppsSTR);
        return storedAppData;
    }

    else {
        return [];
    }
}

const addToStoredDB = (id) => {

    const storedAppData = getStoredApp();

    if (storedAppData.includes(id)) {
        
        alert("This App already install.");
    }

    else {
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("App-list", data);
    }
}

 const removeApp = (id) => {
    const stored = JSON.parse(localStorage.getItem("app-store")) || [];
    const remaining = stored.filter(item => parseInt(item) !== parseInt(id));
    localStorage.setItem("app-store", JSON.stringify(remaining));
};


export { addToStoredDB, getStoredApp ,removeApp };

