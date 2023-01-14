let express = require('express');
let app = express();
let port = 9500;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = "mongodb+srv://meena1:ashok0123@cluster0.rmnkx5t.mongodb.net/?retryWrites=true&w=majority";
let db;

//1
//create-GET
app.get('/', (req,res) => {
    res.send('<h1>Hi from Mongo</h1>');
})

// //2
// //create-GET
// //CATEGORY
// app.get('/category', (req,res) => {
//     db.collection('category').find().toArray((err,result)=>{
//         if (err) throw err;
//         res.send(result);
//     })
// })


//2.1
//create-GET
//CATEGORY/ID - (params-/)
app.get('/category/:id', (req,res) => {
    let id = req.params.id
    db.collection('category').find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result);
    })
})



// //2.2
// //create-GET
// //CATEGORY/ID - (Qparams-?)
// app.get('/category', (req,res) => {
//     //let id = req.params.id;
//     let cid = req.query.cid;
//     console.log(cid);
//     db.collection('category').find().toArray((err,result)=>{
//         if (err) throw err;
//         res.send(result);
//     })
// })

// //2.3
// //create-GET
// //CATEGORY/ID - (Qparams-?)
// //based on id & category
// app.get('/category', (req,res) => {
//     //let id = req.params.id;
//     let id = Number(req.query.id);
//     let category = req.query.category;
//     let query={}
//     if(id){
//         query={id:id}
//     }
//     else if(category){
//         query={category:category} 
//     }
//     console.log(id);
//     db.collection('category').find(query).toArray((err,result)=>{
//         if (err) throw err;
//         res.send(result);
//     })
// })



//2.4
//create-GET
//CATEGORY/ID - (Qparams-?)
//based on NESTED ARRAY

app.get('/category', (req,res) => {
    //let id = req.params.id;
    let id = Number(req.query.id);
    let category = req.query.category;
    let query={}
    if(id){
        query={id:id}
    }
    else if(category){
        query={category:category} 
    }
    console.log(id);
    db.collection('category').find(query).toArray((err,result)=>{
        if (err) throw err;
        res.send(result);
    })
})



//2
//create-GET
//CATEGORY
app.get('/products', (req,res) => {
    db.collection('products').find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result);
    })
})


//2
//create-GET
app.get('/area', (req,res) => {
    res.send('<h1>Hi from area</h1>');
})


// //listen
// app.listen(port, () =>{
//     console.log(`server is running on the port ${port}`)
// })    

//connecting mongodb with node.js
MongoClient.connect(mongoUrl,{useNewUrlParser:true},(err,dc)=>{
    if (err){
        console.log("Error while connecting");
    }else{
        db = dc.db("sugar");
    }
    

    //listen
    app.listen(port, () =>{
        console.log(`server is running on the port ${port}`)
    }) 

})



//mongodb://localhost:27017
//mongodb+srv://meena1:ashok0123@cluster0.rmnkx5t.mongodb.net/?retryWrites=true&w=majority

