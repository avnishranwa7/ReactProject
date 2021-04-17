import './books.css';
import './welcome.css'
import {database} from '../../firebase';
import {useEffect} from 'react';
import firebase from 'firebase';

function ShowBooks({books, setBooks}){
    
    // const fetchBooks=async()=>{

    //     // const response = database.collection('books');
    //     // const data = await response.get();
    //     // data.docs.forEach(book => {
    //     //     setBooks([book.data()])
    //     // })
    //   }
      useEffect(() => {
        database.collection('books').onSnapshot(snapshot => {
            setBooks(snapshot.docs.map(doc => doc.data()))
        })
      }, [])
      
      
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