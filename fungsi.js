require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
let app = express();
let urlencodedParser = bodyParser.urlencoded({ extended: false });


//const path = require('path');
app.set('views', 'Viewsfungsi');


//app.engine('ejs', require('ejs').renderFile);
app.set('view engine','ejs');

app.use('/style', express.static('style'));

app.get('/',function(req,res){
    res.render('home');
})


app.get('/profile/:name',function(req,res){
    
    res.render('profile.ejs',{nama : req.params.name});
})

app.get('/musiclist',function(req,res){
    res.redirect('musiclist.ejs');
})


app.get('/musiclist.ejs',function(req,res){
    let music1 = 'Senorita By Shawn Mendes'
    res.render('musiclist.ejs',{music1});
})

app.get('/singer', function(req,res){
    res.redirect('singer.ejs')
})

app.get('/singer.ejs', function(req,res){
    console.log(req.query);
    res.render('singerList.ejs', {qs : req.query});
})

app.post('/singer.ejs',urlencodedParser, function(req,res){
    console.log(req.body);
    res.render('singerList.ejs', {qs : req.query});
})

app.get('/join',function(req,res){
    res.redirect('join.ejs');
})

app.get('/join.ejs',function(req,res){
    res.render('join.ejs');
})

app.post('/join.ejs',urlencodedParser,function(req,res){
    console.log(req.body);
    res.render('joined.ejs',{data: req.body});
})

app.get('/termscondition.ejs',function(req,res){
    res.render('termscondition.ejs');
})

// Membuat Transporter

let transporter = nodemailer.createTransport({ 
	service : 'gmail',	
	auth : {
		user :process.env.email,
		pass :process.env.pass
	}
});

let mailOptions ={
	from : 'pondokdimsum.id@gmail.com', // berfungsi memberitahu dari mana email berasal.
	to : 'ryokartawijaya@gmail.com',// Tujuan email dikirim kesiapa..
	subject :'Testing Node Mailer',// subject email yang ada di headline of email.
	text : 'It works!'// isi email.
};

transporter.sendMail(mailOptions,function(err,data){	
	if(err){
		console.log('An error has occured', err);
	}
	else{
		console.log('Email Sent!');
	}
}); 










app.get('*',function(req,res){
    res.sendFile(__dirname + '/viewsfungsi/404.html');
})



app.listen(3000);
console.log('Server is running');