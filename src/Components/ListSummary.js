import React from 'react';

const ListSummary = ({title, author, content}) => {
    console.log(typeof content)
    return(
        <>
            <h3>{title}</h3>
            <h4>By {author}</h4>
            <p>{content}</p>
        </>
    )
}

export default ListSummary;