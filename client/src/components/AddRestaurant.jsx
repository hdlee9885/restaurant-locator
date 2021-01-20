import React, { useState, useContext } from 'react'
import RestaurantAPI from '../api/Restaurant'
import { RestaurantsContext } from '../context/RestaurantsContext';
import '../stylesheets/AddRestaurant.css'

function AddRestaurant() {
    const { addRestaurant } = useContext(RestaurantsContext);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price_range, setPriceRange] = useState("Price Range");

    const addNewRestaurant = async (e) => {
        e.preventDefault();
        try{
            const response = await RestaurantAPI.post('/', {
                name: name,
                location: location,
                price_range: price_range,
            });
            addRestaurant(response.data.data.restaurant);
            console.log(response)
        } catch (err) {
            console.log(err)
        }
        
    }

    return (
        <div className="mb-4">
            <form action="">
                <div className="row">
                    <div className="col-4">
                        <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="name"
                        />
                    </div>
                    <div className="col-4">
                        <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="location"
                        />
                    </div>
                    <div className="col-2">
                        <select
                            className="form-select"
                            value={price_range}
                            onChange={(e) => setPriceRange(e.target.value)}
                        >
                        <option disabled>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <button
                            type="submit"
                            onClick={addNewRestaurant}
                            className="btn btn-primary btn-block"
                        >
                            Add
                        </button>
                    </div>
                    
                </div>
            </form>
        </div>
    );
};


export default AddRestaurant
