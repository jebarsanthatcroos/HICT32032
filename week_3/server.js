const express = require('express');
const BooksData = require("./data");
const books = require('./data');

const app =express();
 const port =8080;


  app.use(express.json());

app.get('/',(req, res)=>{
    res.send('node.js server runging  welcome to expres' );

});



 app.get('/api/book',(req,res)=>{
      res.status(200).json(BooksData);

 });


 app.post('/api/book',(req,res)=>{
      const newBook =req.body;
      BooksData.push(newBook);
      res.status(201).json(
        {
            Message:"added new book data",
            data:newBook
            
        }
      )
   
 });


 app.use((req,res)=>{
      
    res.status(404).json(
        {
            "Message":"route not found"
        }
    )
 });




  app.listen(port,()=>{
    console.log(`express app is runing http://localhost:${port}`);
  });