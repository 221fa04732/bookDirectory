import express, {Response, Request} from 'express'
import cors from 'cors'

const app= express();
app.use(express.json());
app.use(cors())


interface bookType {
    id : number
    title : string,
    author : string,
    genre : string,
    totalPage : number, 
}

let bookList : bookType[] = [];

app.get('/allbook', (req : Request, res : Response)=>{
    res.status(201).json({
        bookList : bookList.length > 0 ? bookList : "No avilable book"
    })
})

app.get('/book/:id', (req : Request, res : Response)=>{
    const { id } = req.params;
    const filterBook = bookList.filter(item => item.id == Number(id))
    res.status(201).json({
        bookList : filterBook.length > 0 ? filterBook : "No book found"
    })
})

app.post('/book', (req : Request, res : Response)=>{
    const book : bookType = req.body;
    bookList.push(book);
    res.status(201).json({
        Msg : "Book added"
    })
})

app.put('/book/:id', (req : Request, res : Response)=>{
    const { id } = req.params;
    const updatedBook = req.body;
    bookList = bookList.filter(item => item.id != Number(id))
    bookList.push(updatedBook)
    res.status(201).json({
        Msg : "Book updated"
    })
})

app.delete('/book/:id', (req : Request, res : Response)=>{
    const { id } = req.params
    bookList = bookList.filter(item => item.id != Number(id))
    res.status(201).json({
        Msg : "Book deleted"
    })
})

app.listen(3000, ()=>{
    console.log("server is listining")
})