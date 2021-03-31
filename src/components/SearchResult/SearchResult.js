import React, { useContext } from 'react';
import { SearchContext } from '../../App';
import people from '../images/peopleicon.png'
import { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const SearchResult = () => {

    const handleApiLoaded = (map, maps) => {
        console.log(map, maps)
    };
     const props = {
        center: {
          lat: 23.8223,
          lng: 90.3654
        },
        zoom: 16
      };
    const [search, setSearch] = useContext(SearchContext);
    console.log(setSearch);
    return (

        <div style={{ marginTop: '40px' }} className="container">
            <div className="row">
                <div className="col-md-4 justify-content-center">
                    <div className="row">
                        <h3>Your ride is {search.rideType}</h3>
                        <hr />
                        <div style={{ border: '1px solid black', borderRadius: '5px', margin: '10px',padding: '7px' }} className=" d-flex justify-content-between">
                            <div>
                                <img src={search.imageURL} alt="" width="50" height="50" />
                            </div>
                            <div>
                                <img src={people} alt="" width="50" height="50" /><span><b>1</b></span>
                            </div>
                            <div>
                                <b>$150</b>
                            </div>
                        </div>
                        <div style={{ border: '1px solid black', borderRadius: '5px', margin: '10px',padding: '7px' }} className=" d-flex justify-content-between">
                            <div>
                                <img src={search.imageURL} alt="" width="50" height="50" />
                            </div>
                            <div>
                                <img src={people} alt="" width="50" height="50" /><span><b>2</b></span>
                            </div>
                            <div>
                                <b>$250</b>
                            </div>
                        </div>
                        <div style={{ border: '1px solid black', borderRadius: '5px', margin: '10px',padding: '7px' }} className=" d-flex justify-content-between">
                            <div>
                                <img src={search.imageURL} alt="" width="50" height="50" />
                            </div>
                            <div>
                                <img src={people} alt="" width="50" height="50" /><span><b>4</b></span>
                            </div>
                            <div>
                                <b>$250</b>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ padding: '40px' }} className="col-md-8 d-flex justify-content-end">
                    <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys=""
                        defaultCenter={props.center}
                        defaultZoom={props.zoom}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                    >
                        {/* <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        /> */}
                    </GoogleMapReact>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default SearchResult;