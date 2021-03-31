import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import RideData from '../Data/Data.json';

const Destination = () => {
    const {id} = useParams();
    const [destination, setDestination] = useState({});
    console.log(destination);
    useEffect(()=>{
        setDestination(RideData);
    }
    ,[id]);
    const history = useHistory();

    const handleSearch = () => {
        history.push('/search-result')
        console.log("Searched Clicked")
    }
    return (
        <div style={{marginTop:'40px'}} className="container">
        <div className ="row">
                <div className="col-md-6 justify-content-center">
                    <form onSubmit="">
                    <label htmlFor="pick-from">Pick From</label>
                    <br/>
                    <input name="pick-from" type="text"/>
                    <br/><br/>
                    <label htmlFor="pick-to">Drop at</label>
                    <br/>
                    <input name="pick-to" type="text"/>
                    <br/><br/>
                    </form>
                    <button className = "btn btn-success" onClick={handleSearch}>Search</button>
                </div>
                <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                    <img src="https://i.ibb.co/Gx1VdnP/Map.png" alt=""/>
                </div>
        </div>
            
        </div>
    );
};

export default Destination;