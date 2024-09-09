import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ book }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleShow = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedItem(null);
    };

    return (
        <div className="card-container">
            {book.map((item) => {
                const priceInfo = item.saleInfo.listPrice;

                return (
                    <div
                        className="card"
                        key={item.id}
                        onClick={() => handleShow(item)} // Open the modal with the selected item
                    >
                        <img src={item.volumeInfo.imageLinks?.thumbnail} alt={item.volumeInfo.title} />
                        <div className="bottom">
                            <h3 className="title">{item.volumeInfo.title}</h3>
                            <p className='author_name'>Authors: {item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown'}</p>
                            <p className="amount">
                                Price: {priceInfo ? `${priceInfo.amount} ${priceInfo.currencyCode}` : 'N/A'}
                            </p>
                        </div>

                        {/* Bootstrap Modal */}
                        <Modal show={showModal} onHide={handleClose} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>{selectedItem?.volumeInfo.title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <img
                                    src={selectedItem?.volumeInfo.imageLinks?.smallThumbnail}
                                    alt={selectedItem?.volumeInfo.title}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <h3>{selectedItem?.volumeInfo.title}</h3>
                                <h5>{selectedItem?.volumeInfo.authors?.join(', ') || 'Unknown'}</h5>
                                <h6>{selectedItem?.volumeInfo.publisher} <span>{selectedItem?.volumeInfo.publishedDate}</span></h6>
                                <p>{selectedItem?.volumeInfo.description}</p>
                                <a href={selectedItem?.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary">More</Button>
                                </a>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;


// import React from 'react';

// const Card = ({ book }) => {
//     return (
//         <div className="card-container">
//             {book.map((item) => {
//                 const priceInfo = item.saleInfo.listPrice; // Access the price information if available

//                 return (
//                     <div className="card" key={item.id} >
//                         <img src={item.volumeInfo.imageLinks?.thumbnail} alt={item.volumeInfo.title} />
//                         <div className="bottom">x
//                             <h3 className="title">{item.volumeInfo.title}</h3>
//                             <p className='author_name'>Authors: {item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown'}</p>
//                             <p className="amount">
//                                 Price: {priceInfo ? `${priceInfo.amount} ${priceInfo.currencyCode}` : 'N/A'}
//                             </p>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default Card;












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











