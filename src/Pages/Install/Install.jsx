import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../Components/localStorage';
import Installed from '../../Components/installedApplication/Installed';

const Install = () => {
  const [appinstall, setAppinstall] = useState([]);
  const data = useLoaderData(); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);  
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!data || !Array.isArray(data)) return;

    const storeAppData = getStoredApp();
    const ConvertStoredAppData = storeAppData.map(id => parseInt(id));

    const filtered = data.filter(app =>
      ConvertStoredAppData.includes(app.id)
    );

    setAppinstall(filtered);
  }, [data]);


  
  if (loading || !data || !Array.isArray(data)) {
    return <p className="text-center text-xl font-semibold">Loading...</p>;
  }
  const handleUninstall = (id) => {
    
    const updated = appinstall.filter(app => app.id !== id);
    setAppinstall(updated);
  };

  return (
    <div>
      {appinstall.length === 0 && (
        <p className="text-center text-gray-500">No installed apps found.</p>
      )}

      {appinstall.map(app => (
        <Installed key={app.id} apps={app} onUninstall={handleUninstall} />
      ))}
    </div>
  );
};

export default Install;
