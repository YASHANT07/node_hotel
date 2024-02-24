

const express = require('express');
const app = express();
const db = require('./db'); // Corrected require statement

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Person = require('./models/Person');
const MenuItem= require('./models/MenuItem');
app.get('/', (req, res) => {
    res.send('hello world');
});


app.post('/person',async(req,res)=>{
     
    try{
        const data = req.body

        const newPerson = new Person(data);

       const savedperson= await newPerson.save();
        
       console.log('data saved');
       res.status(200).json(savedperson);

    }catch(err){
         console.log(err);
         res.status(500).json({err:'internal server error'});
    }
}); 

app.get('/person',async(req,res)=>{
     
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);

    }catch(err){
         console.log(err);
         res.status(500).json({err:'internal server error'});
    }
}); 

app.post('/menuItem',async(req,res)=>{
     
    try{
        const data = req.body

        const newmenuItem = new MenuItem(data);

       const savedmenuItem= await newmenuItem.save();
        
       console.log('data saved');
       res.status(200).json(savedmenuItem);

    }catch(err){
         console.log(err);
         res.status(500).json({err:'internal server error'});
    }
}); 


app.get('/menuItem',async(req,res)=>{
     
    try{
        const data = await MenuItem.find();
        console.log(' menu data fetched ');
        res.status(200).json(data);

    }catch(err){
         console.log(err);
         res.status(500).json({err:'internal server error'});
    }
}); 

app.listen(9000, () => {
    console.log('App is running on port 9000');
});







