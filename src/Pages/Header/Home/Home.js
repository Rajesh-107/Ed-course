import React from 'react';
import Accrodion from './Accrodion';

import Banner from './Banner';
import Services from './Services';
import TotalUser from './TotalUser';

const Home = () => {
    return (
        <div className='px-16'>
           <Banner></Banner>
           <Services></Services>
           <TotalUser></TotalUser>
           <Accrodion></Accrodion>
        </div>
    );
};

export default Home;