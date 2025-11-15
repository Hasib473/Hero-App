import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../../Components/localStorage";
import Installed from "../../Components/installedApplication/Installed";
import { CiCircleChevDown } from "react-icons/ci";
import Loading from "../../Components/Loading/Loading";
import { toast, ToastContainer } from "react-toastify";

const Install = () => {
  const [appinstall, setAppinstall] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const data = useLoaderData();


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  
  useEffect(() => {
    if (!data || !Array.isArray(data)) return;

    const storeAppData = getStoredApp();
    const storedIds = storeAppData.map((id) => parseInt(id));

    const filteredApps = data.filter((app) =>
      storedIds.includes(app.id)
    );

    setAppinstall(filteredApps);
  }, [data]);

  
  if (loading || !data || !Array.isArray(data)) {
    return <Loading />;
  }


  const handleUninstall = (id) => {
    toast("Uninstall Successful");

    const updatedList = appinstall.filter((app) => app.id !== id);
    setAppinstall(updatedList);
  };

  
  const handleSort = (type) => {
    let sortedList = [...appinstall];

    if (type === "size") {
      sortedList.sort((a, b) => a.size - b.size);
    } else  {
      sortedList.sort((a, b) => b.size - a.size);
    }

    setAppinstall(sortedList);
    setDropdownOpen(false);
  };

  return (
    <div>
      {appinstall.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No installed apps found.
        </p>
      )}

      <div className="w-11/12 mx-auto">
        <div className="text-center mt-5">
          <h1 className="text-3xl font-bold">Your Installed Apps</h1>
          <p className="text-sm font-normal">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

    
        <div className="flex justify-between items-center my-4 relative">
          <p className="text-xl font-bold">{appinstall.length} App found</p>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="btn flex items-center gap-1"
            >
              Sort By <CiCircleChevDown />
            </button>

            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
                <li>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleSort("size")}
                  >
                    Low-High(size)
                  </button>
                </li>

                <li>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleSort("review")}
                  >
                    High-Low(size)
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

    
      {appinstall.map((app) => (
        <Installed
          key={app.id}
          apps={app}
          onUninstall={handleUninstall}
        />
      ))}

      <ToastContainer />
    </div>
  );
};

export default Install;
