import React, {useState, useEffect} from 'react';
import './welcome.css'
import ShowBooks from './books';
import {database} from '../../firebase';


function Register({books, setBooks}, {getbooks}){
    function handleRegister(event){
        event.preventDefault();
        const bookname = event.target.elements.bookname.value;
        const bookauth = event.target.elements.bookauth.value;
        const bookprice = event.target.elements.bookprice.value;
        const url = event.target.elements.url.value;
        const book = {bookname: bookname, bookauth: bookauth, bookprice: bookprice, url: url};
        setBooks(prevBooks =>{
            return prevBooks.concat(book)
        })
        event.target.reset();
    }
    

    // function Show(){
    //     return(
    //         <>
    //             <ShowBooks books={books}/>
    //         </>
    //     );
    // }

    return(
        <div className='body'>
            <div className="login-box" style={{marginLeft:5}}>
                <h2>Register Your Book</h2>
                <form onSubmit={handleRegister}>
                    <div className="user-box">
                    <input type="text" name="bookname" required=""/>
                    <label>Book Name</label>
                    </div>
                    <div className="user-box">
                    <input type="text" name="bookauth" required=""/>
                    <label>Book Author</label>
                    </div>
                    <div className="user-box">
                    <input type="number" name="bookprice" required=""/>
                    <label>Price</label>
                    </div>
                    <div className="user-box">
                    <input type="text" name="url"/>
                    <label>Image URL(if any)</label>
                    </div>
                    <span></span>
                    <span></span>
                    <button>Submit</button>
                </form>
                <br/>
            
                
            </div>
            <div className='book-box' style={{marginTop:300}}>
                <h2>List of Books</h2>
                <ShowBooks books={books}/>
            </div>
        </div>

        
            
    );
}

function Welcome({handleLogout}){
    const [books, setBooks] = useState([]);
    const GetBooks = async()=>{
        const response = database.collection('books');
        const data = await response.get()
        data.docs.forEach(item=>{
            setBooks([...books, item.data()])
        })
    }
    useEffect(() => {
        GetBooks();
    }, [])
    return(
        <div className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <Register books = {books} setBooks={setBooks}/>
        </div>
        
    );
    
}

export default Welcome;