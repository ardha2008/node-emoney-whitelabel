
# NodeJS Emoney Whitelabel

eMoney Whitelabel NodeJS SDK tools for integration development in vascomm emoney whitelabel project so can easily build integration with less step. 
# Getting Started
## Installing
To installing eMoney Whitelabel SDK use `npm` module
```bash
$ npm install node-emoney-whitelabel
```
After installing the package start use SDK like so:
```js
const emoney = require('node-emoney-whitelabel')
```
## Configuration
Before using features, you are required to do some configuration like api key
```js
const config = {
	apikey : 'yourgeneratekey'
}
const object = new emoney(config)
```
**Note**
| Key    | Description        | Type   | isMandatory |
|--------|--------------------|--------|-------------|
| apikey | authentication key | string | true        |

# Usage
## Inquiry Data
Getting some user data by number of Virtual Account
### check(body,callback)
- `body`  - Body request, actually it is JSON format
-  `callback` (`function`) - Invoked when process has finalized and get any response, these have two argument `error` and `result` 

**Example**
```js
object.emoney('08111111111')
	.check({va:'08111111111'},(error,result)=>{
		if(error){
			console.log(error)
		}else{
			console.log(result)
		}
```
# Official Website

 - [Documentation](https://ewl-doc.vascomm.co.id/) 
 - [About Us](https://www.vascomm.co.id)

# Contributor
 - [ardha2008](https://github.com/ardha2008)
 - You're next ...