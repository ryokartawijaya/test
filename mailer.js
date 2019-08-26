require('dotenv').config();
const nodemailer = require('nodemailer');

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
