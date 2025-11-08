import React from 'react';
import Hero from '../../Components/Hero/hero';
import Tranding from '../../Components/Tranding/Tranding';
import { useLoaderData } from 'react-router';

const Home = () => {
    const trandData = useLoaderData();
    console.log(trandData)
    return (
        <div>
           <Hero></Hero>
           <Tranding trandData={trandData}></Tranding>
        </div>
    );
};

export default Home;