import React from "react";
import "./StarRating.css";

export default function StarRating({ rating }) {
    const maxStars = 5;
    const fullStars = Math.floor(rating); 
    const hasHalfStar = rating % 1 !== 0; 
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0); 
    return (
        <div className="star-rating">
            {Array.from({ length: fullStars }).map((_, i) => (
                <span key={`full-${i}`} className="star">★</span>
            ))}
            {hasHalfStar && (
                <span key="half" className="star half">
                    <span style={{ width: '50%', overflow: 'hidden' }}>
                        ★
                    </span>
                </span>
            )}
            {Array.from({ length: emptyStars }).map((_, i) => (
                <span key={`empty-${i}`} className="star empty">★</span>
            ))}
        </div>
    );
}