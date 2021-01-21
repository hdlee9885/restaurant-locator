import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantAPI from '../api/Restaurant'
import StarRating from '../components/StarRating';

function RestaurantDetailPage() {
    const { id } = useParams();
    const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);

    useEffect(() => {
        const getRestaurant = async () => {
            try {
                const response = await RestaurantAPI.get(`${id}`);
                setSelectedRestaurant(response.data.data.restaurant);
            } catch (err) {
                console.log(err)
            }
        }

        getRestaurant();
        
    }, [])

    return (
        <div>
            {selectedRestaurant && selectedRestaurant.name}
            <StarRating rating={3.2} />
        </div>
    )
}

export default RestaurantDetailPage
