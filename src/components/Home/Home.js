import React from 'react';
import RideData from '../Data/Data.json';
import Rides from '../Rides/Rides';

const Home = () => {
    return (
        <div class="container">
            <div class="row">
                <h2 style={{ textAlign: 'center' }}>Select Your First Ride</h2>
                {
                    RideData.map(ride => <Rides ride={ride}></Rides>)
                }
            </div>
        </div>
    );
};

export default Home;