const axios = require('axios').default;

var fetchData = () => {
	axios.get('/user?ID=12345')
	.then(function (response) {
		//handle success
		console.log(response);
	})
	.catch(function (error) {
		//handle error
		console.log(error);
	})
}

module.exports = fetchData;