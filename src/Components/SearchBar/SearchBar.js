import React from "react";

const sortOptions = {
    'Best match': 'best match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

const SearchBar = () => {
    const sortByOption = () => {
        return Object.keys(sortOptions).map((sort) => {
            let sortOptionsValue = sortOptions[sort];
            return <li key={sortOptionsValue}>{sort}</li>;
        });
    };

    return (
        <>
        <input placeholder="Search Business" />
        <input placeholder="Location?" />
        <button>Search</button>
        </>
    )
}