import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantAPI from '../api/Restaurant'
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

function RestaurantDetailPage() {
    const { id } = useParams();
    const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);

    useEffect(() => {
        const getRestaurant = async () => {
            try {
                const response = await RestaurantAPI.get(`${id}`);
                setSelectedRestaurant(response.data.data);
            } catch (err) {
                console.log(err)
            }
        }

        getRestaurant();
        
    }, [])

    return (
        <div className="container">
            <h2 className="text-center mt-4 display-1">
                {selectedRestaurant && selectedRestaurant.restaurant.name}
            </h2>
            <div className="mt-3">
                <Reviews reviews={selectedRestaurant.reviews}/>
                <AddReview />
            </div>
        </div>
    )
}

export default RestaurantDetailPage
