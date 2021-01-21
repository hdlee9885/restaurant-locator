import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import RestaurantAPI from '../api/Restaurant'

function UpdateRestaurantPage(props) {

    const { id } = useParams();

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price_range, setPriceRange] = useState("");

    let history = useHistory();

    useEffect(() => {
        const getRestaurant = async() => {
            const response = await RestaurantAPI.get(`/${id}`);
            setName(response.data.data.restaurant.name);
            setLocation(response.data.data.restaurant.location);
            setPriceRange(response.data.data.restaurant.price_range);
        }
        
        getRestaurant();
    }, [])

    const updateRestaurant = async (e) => {
        e.preventDefault();
        const response = await RestaurantAPI.put(`/${id}`, {
                name: name,
                location: location,
                price_range: price_range,
        });
        history.push('/')
    }

    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="name" 
                        type="text" 
                        className="form-control" 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        id="location" 
                        type="text" 
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price_range">Price Range</label>
                    <input 
                        value={price_range}
                        onChange={(e) => setPriceRange(e.target.value)}
                        id="price_range" 
                        type="text" 
                        className="form-control"
                    />
                </div>

                <button onClick={() => updateRestaurant(id)} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default UpdateRestaurantPage
