const express = require('express');
const cors= require('cors')
const app = express();
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Your server is running barik!!!')
})


const users = [
    { id: 1, name: 'barik', job: 'nathing', email: 'abc@mail.com' },
    { id: 2, name: 'barik1', job: 'nathing', email: 'abcd@mail.com' },
    { id: 3, name: 'barik2', job: 'nathing', email: 'abcde@mail.com' },
    { id: 4, name: 'barik3', job: 'nathing', email: 'abcdef@mail.com' },
    { id: 5, name: 'tarik3', job: 'nathing', email: 'abbcdef@mail.com' }

]



app.get('/users', (req, res) => {

//// filter search query

    if (req.query.name) {
        const search= req.query.name;
        const matched= users.filter(user=>  user.name.toLowerCase().includes(search))
        res.send(matched)
    }
   else{
    res.send(users)
   }
    
})

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id= req.params.id;
    const user= users[id];

    res.send(user)
})

//post 

app.post('/user', (req,res)=>{
    console.log('request',req.body)
    const user = req.body;
    user.id= users.length +1;
    users.push()
    res.send(user);
})


app.listen(port, () => {
    console.log('port is running barik', port)
})