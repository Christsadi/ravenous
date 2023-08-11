import React from "react";

const options = {
    'Best match': 'best match',
    'Rating': 'rating',
    'Review_count': 'review_count'
}

const SearchBar = () => {
    return (
        <>
        <input placeholder="Search Business" />
        <input placeholder="Location?" />
        <button>Search</button>
        </>
    )
}