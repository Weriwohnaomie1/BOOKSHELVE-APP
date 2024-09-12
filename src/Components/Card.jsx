import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <div className="container">
            <div className="row">
                {book.map((item) => {
                    const volumeInfo = item.volumeInfo || {};
                    const priceInfo = item.saleInfo?.listPrice || {};

                    // Check if essential info is available
                    const hasImage = volumeInfo.imageLinks?.thumbnail;
                    const hasTitle = volumeInfo.title;
                    const hasDescription = volumeInfo.description;

                    if (!hasImage || !hasTitle) return null; // Skip this book if essential info is missing

                    return (
                        <div className="col-12 col-md-4 mb-4 d-flex" key={item.id}>
                            <div className="card bg-[#D4B996] text-black shadow-lg" style={{ height: "100%" }}>
                                <img
                                    className="card-img-top"
                                    src={hasImage}
                                    alt={volumeInfo.title}
                                    style={{ height: "200px", objectFit: "cover" }} // Fixed image height
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title" style={{ fontSize: "1.25rem" }}>
                                        {hasTitle}
                                    </h5>
                                    <p className="card-text text-muted" style={{ fontSize: "1rem", fontWeight: "bold" }}>
                                        Authors: {volumeInfo.authors ? volumeInfo.authors.join(", ") : "Unknown"}
                                    </p>
                                    {hasDescription && (
                                        <p
                                            className="card-text"
                                            style={{
                                                fontSize: "0.875rem",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: "vertical"
                                            }}
                                        >
                                            <strong>Description:</strong> {volumeInfo.description}
                                        </p>
                                    )}
                                    <p className="card-text text-muted" style={{ fontSize: "0.875rem" }}>
                                        Price: {priceInfo.amount ? `${priceInfo.amount} ${priceInfo.currencyCode}` : "N/A"}
                                    </p>
                                    <Button
                                        variant="primary"
                                        onClick={() => handleShow(item)}
                                        style={{ marginTop: "auto" }}
                                    >
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {selectedItem && (
                <Modal show={showModal} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedItem.volumeInfo.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img
                            src={selectedItem.volumeInfo.imageLinks?.smallThumbnail}
                            alt={selectedItem.volumeInfo.title}
                            className="img-fluid"
                            style={{ maxHeight: "400px", objectFit: "cover" }}
                        />
                        <h5 className="mt-3" style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                            {selectedItem.volumeInfo.authors?.join(", ") || "Unknown"}
                        </h5>
                        <p><strong>Publisher:</strong> {selectedItem.volumeInfo.publisher || "N/A"} ({selectedItem.volumeInfo.publishedDate || "N/A"})</p>
                        <p><strong>Description:</strong> {selectedItem.volumeInfo.description || "No description available."}</p>
                        <a
                            href={selectedItem.volumeInfo.previewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-info"
                        >
                            More
                        </a>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
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











