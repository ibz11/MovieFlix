require('dotenv').config()

const cors=require('cors')
const express=require('express')
const app=express()

//middleware
app.use(cors(),express.json())
//data
const movies=require('./data/movies')




app.get('/api',(req,res)=>{
    //  console.log(req)
    res.status(200).json(movies)
})

app.get('/api/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    let movie=movies.find((movie)=>movie.id===id)

   if(!movie)
   {
    res.send(304).json({msg:"Movie not found"})
    }
    res.status(200).json(movie)
})

app.listen(process.env.PORT,()=>{
console.log(`App is running at http://localhost:${process.env.PORT}`)
})


