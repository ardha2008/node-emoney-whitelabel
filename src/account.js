'use strict'

const unirest = require('unirest');
const prefix = 'account/'
const request = (url,key,auth,callback)=>{
	let output = new Object
	unirest.post(url)
		.headers({Authorization:auth,'Accept': 'application/json', 'Content-Type': 'application/json'})
		.send(key)
		.end(function (response) {
			
		  if(response.error){
		  	callback(response.body);
		  }else{
		  	callback(null,response.body);
		  }
		});
}

exports.registration = (data,callback)=>{
	let url = data._host+prefix+'registration';
	request(url,data._data,data._authorization,(err,result)=>{
		if(err){
			callback(err)
		}else{
			callback(null,result)
		}
	})
}

