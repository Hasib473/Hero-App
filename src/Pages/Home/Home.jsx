"use client"
import React, { useEffect, useMemo, useState } from 'react';
import Hero from '../../Components/Hero/hero';
import Tranding from '../../Components/Tranding/Tranding';
import { NavLink, useLoaderData } from 'react-router';

const Home = () => {
   
     const loaderData = useLoaderData();
     const [data,setData] = useState()
    
    const trandData = useMemo(() => {
        return loaderData || {};
    }, [loaderData]);
    
    useEffect(() => {
        
        setData(trandData)
    }, [trandData]);
    
    return (
        <div>
           <Hero></Hero>
           <Tranding trandData={data}></Tranding>
        </div>
    );
};

export default Home;