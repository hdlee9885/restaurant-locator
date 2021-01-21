import React from 'react'
import StarRating from './StarRating'

function Reviews({ reviews }) {
    return (
        <div className="row rows-cols-3 mb-2 container">
            {reviews.map(review => (
                <div
                    key={review.id}
                    className="card text-white bg-info mb-3 mr-4"
                    style={{ maxWidth: "30%" }}
                >
                    <div className="card-header d-flex justify-content-between">
                        <span>{review.name}</span>
                        <span>
                            <StarRating rating={review.rating} />
                        </span>
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                            {review.content}
                        </p>
                    </div>
                </div>
            ))}
             
        </div>
       
    )
}

export default Reviews
