import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../Components/localStorage';
import Installed from '../../Components/installedApplication/Installed';

const Install = () => {
    const [appinstall , setAppinstall] = useState([])
    const data = useLoaderData();

   useEffect(() => {
    const storeAppData = getStoredApp();
    const ConvertStoredAppData = storeAppData.map(id => parseInt(id));
    const appinstall = data.filter(App => ConvertStoredAppData.includes(App.id));
    setAppinstall(appinstall);
}, [data]);



    return (
        <div>
            {
                appinstall.map(apps => <Installed key={apps.id} apps={apps}></Installed>
                )
            }
            
        </div>
    );
};

export default Install;