import './books.css';

function ShowBooks({books}){
    return(
        <div>
            {books.map(book => (
                <article className='book'>
                    <img src={book.url}/>
                    <h1>{book.bookname}</h1>
                    <h4>{book.bookauth}</h4>
                    <h4>₹{book.bookprice}</h4>
                </article>
            ))}
            
            {/* <ul>
                {books.map(book =>(
                    <li style={{color:'white'}}>
                    Book Name: {book.bookname}
                    <br></br>
                    Book Author: {book.bookauth}
                    <br></br>
                    Book Price: {book.bookprice}
                    </li>
                ))}
            <br/>
            </ul> */}
        </div>
    );
}

export default ShowBooks;