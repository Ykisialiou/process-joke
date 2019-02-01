// Function will process the joke, recieved 
// by POST request

module.exports = x => {
	console.log('Process payload')
	var out = JSON.stringify(x);
	var uppercase = out.toUpperCase(); 
	console.log(`Recieved ${uppercase}`)
	return uppercase 
}
