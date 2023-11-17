const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()

const USERS = [
    {
        username:'sam',
        fname:'SAM',
        lname:'KJ',
        email:'sam',
        profImage:'https://png.pngtree.com/thumb_back/fh260/background/20230523/pngtree-cartoon-illustration-that-shows-a-girl-with-a-hood-image_2685710.jpg',
        ispremium:false
    },
    {
        username:'ryo',
        fname:'RYO',
        lname:'JETT',
        email:'ryo',
        profImage:'https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-anime-girl-in-a-neon-shirt-with-blue-hair-image_2563735.jpg',
        ispremium: true
    }
]

app.use(bodyParser.urlencoded({extended:false}))

app.set('view engine','ejs')

app.get('/',(req, res)=>{
    res.json({message:"server setup"})
});

app.get('/not-found',(req,res)=>{
    res.render('not-found')
})

app.get('/:username',(req, res)=>{
    const {username} = req.params;
    const userDetails = USERS.find(user => user.username === username)
    if(userDetails)
        res.render('user',userDetails);
    else
        res.redirect('/not-found')
});

// app.get('/user',(req, res)=>{
//     res.render('user')
// });

// app.get('/sam',(req, res)=>{
//     let samDetails = {
//         fname:'SAM',
//         lname:'KJ',
//         email:'sam',
//         profImage:'https://png.pngtree.com/thumb_back/fh260/background/20230523/pngtree-cartoon-illustration-that-shows-a-girl-with-a-hood-image_2685710.jpg',
//         ispremium:false
//     }
//     res.render('user',samDetails)
// });

// app.get('/ryo',(req, res)=>{
//     let ryoDetails = {
//         fname:'RYO',
//         lname:'JETT',
//         email:'ryo',
//         profImage:'https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-anime-girl-in-a-neon-shirt-with-blue-hair-image_2563735.jpg',
//         ispremium: true
//     }
//     res.render('user',ryoDetails)
// });

app.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000/')
})