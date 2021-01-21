import React, { useState } from 'react'

function AddReview() {

    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [rating, setRating] = useState("Rating");

    return (
        <div className="mb-2 container">
            <form action="">
                <div className="row">
                    <div className="form-group col-8">
                        <label htmlFor="name">Name</label>
                        <input 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            id="name"
                            placeholder="name"
                            type="text" 
                            className="form-control"/>
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="Rating">Rating</label>
                        <select 
                            value={rating}
                            onChange={e => setRating(e.target.value)} 
                            id="rating" 
                            className="form-select"
                        >
                            <option disabled>Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="review">Review</label>
                    <textarea 
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        id="review" 
                        className="form-control"
                        placeholder="Write your review here">
                    </textarea>
                </div>
                <button className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddReview
