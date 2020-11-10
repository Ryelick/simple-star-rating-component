import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';

export default function StarRating() {
    const [rating, SetRating] = useState(0)
    const [hover, SetHover] = useState(null)

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1

                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => SetRating(ratingValue)}
                        />
                        <FaStar
                            className="star"
                            color={ratingValue <= (hover || rating) ? "#FCFF33" : "#D1D1D1"}
                            size={100}
                            onMouseEnter={() => SetHover(ratingValue)}
                            onMouseLeave={() => SetHover(null)}
                        />
                    </label>
                )
            })}
            <p>Selected star rating is {rating}</p>
            <p>Mouse hover value: {hover}</p>
        </div>
    )
}
