import './books.css';
import './welcome.css'
import {database} from '../../firebase';
import React from 'react';
import {useEffect} from 'react';
import firebase from 'firebase';



function ShowBooks({books, setBooks}){
    
    const fetchBooks=async()=>{

        // const response = database.collection('books');
        // const data = await response.get();
        // data.docs.forEach(book => {
        //     setBooks([book.data()])
        // })
      }
    database.collection("books")
    .get()
    .then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    setBooks(data); // array of cities objects
  });
    
    // const userRef = firebase.database().ref('books');
    // userRef.on('value', (snapshot) => {
    // snapshot.forEach(data => {
    //     const dataVal = data.val()
    //     setBooks.push({
    //     bookname: dataVal.bookname,
    //     bookauth: dataVal.bookauth,
    //     bookprice: dataVal.bookprice,
    //     url: dataVal.url
    //     })
    // })
    // })
    
      
      
    // const GetBooks = async()=>{
    //     const response = database.collection('books');
    //     const data = await response.get()
    //     data.docs.forEach(item=>{
    //         setBooks([...books, item.data()])
    //     })
    // }
    // useEffect(() => {
    //     GetBooks();
    // }, [])
    return(
        <div className='book-box' style={{marginTop:300}}>
        <h2>List of Books</h2>
            <div>
                {books.map(book => (
                    <article className='book'>
                        <img src={book.url}/>
                        <h1>{book.bookname}</h1>
                        <h4>{book.bookauth}</h4>
                        <h4>₹{book.bookprice}</h4>
                        
                    </article>
                    
                ))}
            </div>
            
        </div>
    );
}

export default ShowBooks;