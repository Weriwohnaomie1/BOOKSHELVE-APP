import React from 'react';

const Card = ({ book }) => {
    return (
        <div className="card-container">
            {book.map((item) => {
                const priceInfo = item.saleInfo.listPrice; // Access the price information if available

                return (
                    <div className="card" key={item.id} >
                        <img src={item.volumeInfo.imageLinks?.thumbnail} alt={item.volumeInfo.title} />
                        <div className="bottom">x
                            <h3 className="title">{item.volumeInfo.title}</h3>
                            <p className='author_name'>Authors: {item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown'}</p>
                            <p className="amount">
                                Price: {priceInfo ? `${priceInfo.amount} ${priceInfo.currencyCode}` : 'N/A'}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;












 /*import React from 'react';

const Card = ({ book }) => {
    return (
        <div className="card-container">
            {book.map((item) => (
                <div className="card" key={item.id}>
                    <img src={item.volumeInfo.imageLinks?.thumbnail} alt={item.volumeInfo.title} />
                    <div className="bottom">
                        <h3 className="title">{item.volumeInfo.title}</h3>
                        <p>Authors: {item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown'}</p>
                        <p className="amount">Price: {/* Add amount logic here if needed }</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;*/











