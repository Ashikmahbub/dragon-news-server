const express = require('express')
const app = express();
const cors  = require('cors');
const port = process.env.PORT || 5000;
const news = require('./data/news.json');
const categories = require ('./data/categories.json');
app.use(cors())

 
app.get('/news',(req,res)=>{
    res.send(news);
})
app.get('/news-categories',(req,res)=>{
    res.send(categories);

})


// category new details request and sendning api 
app.get('/news/:id',(req,res)=>{
    const id = req.params.id ;

    const selectedNews = news.find(n =>n._id===id);
    res.send(selectedNews);
})
app.get('/category/:id',(req,res)=>{
    const id =req.params.id;
    if( id==='08'){
        res.send(news);
    }
    const categoryNews = news.filter(n =>n.category_id===id);
    res.send(categoryNews);
})

app.listen(port,()=>{
    console.log('BackEnd server running',port);
    
})