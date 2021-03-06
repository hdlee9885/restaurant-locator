import React, { useEffect, useContext } from 'react'
import RestaurantAPI from '../api/Restaurant'
import { RestaurantsContext } from '../context/RestaurantsContext'
import { useHistory } from 'react-router-dom'

function RestaurantList(props) {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext);

    let history = useHistory();

    const selectRestaurant = (id) => {
        history.push(`/restaurants/${id}`);
    } 

    const updateRestaurant = async (e, id) => {
        e.stopPropagation();
        history.push(`/restaurants/${id}/update`);
    }

    const deleteRestaurant = async (e, id) => {
        e.stopPropagation();
        try {
            const response = await RestaurantAPI.delete(`/${id}`);
            console.log(response)
            setRestaurants(restaurants.filter(restaurant => {
                return restaurant.id !== id;
            }));
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const getAllRestaurants = async () => {
            try {
                const response = await RestaurantAPI.get('/');
                console.log(response.data.data.restaurants);
                setRestaurants(response.data.data.restaurants);
            } catch (err) {
                console.log(err)
            }
        }
        
        getAllRestaurants();
    }, [setRestaurants])

    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants && restaurants.map(restaurant => (
                        <tr onClick={() => selectRestaurant(restaurant.id)} key={restaurant.id}>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.location}</td>
                            <td>{"$".repeat(restaurant.price_range)}</td>
                            <td>Rating</td>
                            <td><button onClick={(e) => updateRestaurant(e, restaurant.id)} className="btn btn-warning">Update</button></td>
                            <td><button onClick={(e) => deleteRestaurant(e, restaurant.id)} className="btn btn-danger">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RestaurantList
