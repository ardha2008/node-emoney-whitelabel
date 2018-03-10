let vascomm_whitelabel = require('../index');
let config = {
	apikey : 'yourgeneratekey'
}
let emoney = new vascomm_whitelabel(config);



emoney.account()
	.registration({ 
	    "phone":"08111111111",
	    "first_name":"Ardha",
	    "last_name":"Herdianto",
	    "dob":"01011990",
	    "mother_name":"Ruth Sahanaya",
	    "pob": "New York",
	    "email":"ardha2008@gmail.com",
	    "pin" : "000000"
	},(err,result)=>{
		if(err){
			console.log(err)
		}else{
			console.log(result)
		}
	})
/*
	//OUTPUT
	{ vascomm:
	   { code: '00',
	     message: 'Create account success',
	     data:
	      { va: 'xxxx',
	        identity_number: '-',
	        first_name: 'Ardha',
	        last_name: 'Herdianto',
	        phone: '08111111111',
	        email: 'ardha2008@gmail.com',
	        dob: '01011990',
	        balance: '0' } } }
*/