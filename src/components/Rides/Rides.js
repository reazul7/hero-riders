import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { SearchContext } from '../../App';


const Rides = (props) => {
    const { imageURL } = props.ride;
    const history = useHistory();
    const [search, setSearch] = useContext(SearchContext)
    setSearch(props.ride);

    const handleRide = () => {
        history.push('/destination')
        setSearch(props.ride);
    }

    return (
        <div style={{marginTop:'10px'}} className="col-md container-fluid">
            <div onClick= {handleRide} style={{padding:'30px'}}>
                <img src={imageURL} class="card-img-top" alt="..."/>
            </div>
        </div>
    );
};

export default Rides;