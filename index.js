"use strict"

const emoney = require('./src/emoney');
const account = require('./src/account');

class EmoneyWhitelabel {
	constructor(data){
		if(typeof data.apikey == 'undefined'){
			throw Error('Unknown apikey, please read official documentation vascomm emoney whitelabel, https://ewl-doc.vascomm.co.id/#authentication')
		}else{
			this._authorization = data.apikey;
		}

		if(typeof data.host == 'undefined'){
			this._host = 'http://api.vasdev.co.id:8066/saas/'
		}else{
			this._host = data.host;
		}
		
	}

	emoney(va){

		if(va === undefined){
			throw new Error('Missing Parameter VA')
		}else{
			this.va = va.toString();
			
			this._result = new Promise((resolve,reject)=>{
				emoney.check(this,(err,rows)=>{
					if(err){
						throw new Error(err.vascomm.message)
					}else{
						resolve(rows)
					}
				})
			})
			return this;
		}

	}

	check(body,cb){

		try {

			if(typeof body == 'object'){
				delete this.va ;
				this.va = body.va
				body = JSON.stringify(body)
				let data = JSON.parse(body);
				this._result= new Promise((resolve,reject)=>{
					emoney.check(this,(err,result)=>{
						if (err){
							reject(err)
						}else{
							resolve(result);
						}
					})
				})				
			}else{
				throw Error('Parameter check() must be JSON value');
			}
			
		} catch (e){
			throw e;
		}

		this._result.then((result)=>{
			cb(null,result)
		}).catch(reason=>{
			cb(reason)
		})
	}

	account(){
		return this;
	}

	registration(body,cb){

		try {

			if(typeof body == 'object'){
				body = JSON.stringify(body)
				this._data = JSON.parse(body);
				this._result= new Promise((resolve,reject)=>{
					account.registration(this,(err,result)=>{
						if (err){
							reject(err)
						}else{
							resolve(result);
						}
					})
				})				
			}else{
				throw Error('Parameter registration() must be JSON value');
			}
			
		} catch (e){
			throw e;
		}

		this._result.then((result)=>{
			cb(null,result)
		}).catch(reason=>{
			cb(reason)
		})
	}

}

module.exports = EmoneyWhitelabel;
