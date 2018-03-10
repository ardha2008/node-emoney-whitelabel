let vascomm_whitelabel = require('../index');
let config = {
	apikey : 'yourgeneratekey'
}
let emoney = new vascomm_whitelabel(config);

emoney.emoney('08111111111')
	.check({va:"08111111111"},(err,result)=>{
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
     message: 'Success',
     data:
      { va: 'xxx',
        identity_number: '-',
        first_name: 'Ardha',
        last_name: 'Herdianto',
        full_name: 'Ardha Herdianto',
        msisdn: '08111111111',
        phone: '08111111111',
        email: 'ardha2008@gmail.com',
        dob: '01011990',
        balance: '0',
        pob: 'New York',
        nasabah_type: 'UNREGISTER',
        status: '1' } } }
*/

