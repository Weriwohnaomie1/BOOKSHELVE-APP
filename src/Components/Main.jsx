import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const [loading, setLoading] = useState(false); // State for loading
    const [error, setError] = useState(""); // State for error messages

    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            setLoading(true); // Set loading to true when starting the fetch
            setError(""); // Clear previous error messages

            axios
                .get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDfBBvRqFPYL60f6cGPdF_n2qDLalUf3Cc&maxResults=40`)
                .then(res => {
                    console.log(res.data); // Log the response
                    if (res.data.items) {
                        setData(res.data.items); // Set book data if items exist
                    } else {
                        setError("No books found."); // Set error if no books are returned
                        setData([]); // Clear book data
                    }
                })
                .catch(err => {
                    console.error("Error fetching data:", err);
                    setError("Failed to fetch books. Please try again."); // Set error state on catch
                })
                .finally(() => {
                    setLoading(false); // Reset loading state
                });
        }
    };

    return (
        <div className="main-section"> 
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like <br /> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Enter Your Book Name"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchBook}
                        />
                        <button onClick={() => searchBook({ key: 'Enter' })}><i className="fas fa-search"></i></button>
                    </div>
                    <img src="./images/child.png" alt="" />
                </div>
            </div>
            <hr className="seperator"/>
            <div className="status">
                {loading && <p>Loading...</p>} {/* Loading indicator */}
                {error && <p className="not_found">{error}</p>} {/* Error message */}
                {!loading && bookData.length > 0 ? <Card book={bookData} /> : null}
                {!loading && !error && bookData.length === 0 && <p className="not_found">No books found.</p>} {/* No books found message */}
            </div>
        </div>
    );
}

export default Main;































































/*import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);

    const searchBook = (evt) => {
        if (evt.key === "Enter") {


            axios
                .get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDfBBvRqFPYL60f6cGPdF_n2qDLalUf3Cc&maxResults=40`)
                .then(res => {
                    console.log(res.data); // Log the response
                    setData(res.data.items || []); // Use empty array if no items
                })
                .catch(err => console.error("Error fetching data:", err));
        }
    };

    return (
        <div className="main-section"> 
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like <br /> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Enter Your Book Name"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchBook}
                        />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src="./images/child.png" alt="" />
                </div>

                
            </div>
            <hr className="seperator"/>
            <div className="container">
                {bookData.length > 0 ? <Card book={bookData} /> : <p className="not_found">No books found.</p>}
                </div>

        </div>
    );
}

export default Main;*/


























































 /*import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);

    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios
                .get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDfBBvRqFPYL60f6cGPdF_n2qDLalUf3Cc&maxResults=40`)
                .then(res => {
                    console.log(res.data); // Log the response
                    setData(res.data.items || []); // Use empty array if no items
                })
                .catch(err => console.error("Error fetching data:", err));
        }
    };

    return (
        <> 
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like <br /> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Enter Your Book Name"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchBook}
                        />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src="./images/child.png" alt="" />
                </div>
            </div>

            <div className="container">
                <pre>{JSON.stringify(bookData, null, 2)}</pre>  
                {bookData.length > 0 ? <Card book={bookData} /> : <p>No books found.</p>}
            </div>
        </>
    );
}

export default Main;*/









































/*import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]); 


    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDfBBvRqFPYL60f6cGPdF_n2qDLalUf3Cc'+'&maxResults=40`)
                .then(res => {
                    setData(res.data.items || []); // Set to empty array if no items
                    
                    // Log book details
                    res.data.items.forEach(item => {
                        const title = item.volumeInfo.title;
                        const authors = item.volumeInfo.authors || [];
                        const description = item.volumeInfo.description || 'No description available';

                        console.log(`Title: ${title}`);
                        console.log(`Authors: ${authors.join(', ')}`);
                        console.log(`Description: ${description}`);
                    });
                })
                .catch(err => console.log(err));
                
        }
    };

    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like <br /> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Enter Your Book Name"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchBook}
                        />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src="./images/child.png" alt="" />
                </div>
            </div>

            <div className="container">
                <Card book={bookData} />
            </div>
        </>
    );
}

export default Main; */