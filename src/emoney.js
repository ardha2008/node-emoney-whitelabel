'use strict'

const unirest = require('unirest');
const prefix = 'emoney/'
const request = (url,key,callback)=>{
	let output = new Object
	unirest.post(url)
		.headers({Authorization:key._authorization,'Accept': 'application/json', 'Content-Type': 'application/json'})
		.send(key)
		.end(function (response) {
			
		  if(response.error){
		  	callback(response.body);
		  }else{
		  	callback(null,response.body);
		  }
		});
}

exports.check = (data,callback)=>{
	let url = data._host+prefix+'check';
	request(url,data,(err,result)=>{
		if(err){
			callback(err)
		}else{
			callback(null,result)
		}
	})
}

