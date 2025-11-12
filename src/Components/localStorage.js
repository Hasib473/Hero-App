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

export { addToStoredDB, getStoredApp };

