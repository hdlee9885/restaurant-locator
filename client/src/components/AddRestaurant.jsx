import React from 'react'
import '../stylesheets/AddRestaurant.css'

function AddRestaurant() {
    return (
        <div className="mb-4">
            <form action="">
                <div className="row">
                    <div className="col-4">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="name"
                        />
                    </div>
                    <div className="col-4">
                        <input
                        className="form-control"
                        type="text"
                        placeholder="location"
                        />
                    </div>
                    <div className="col-2">
                        <select
                            className="form-select"
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
