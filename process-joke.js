// Function will process the joke, recieved 
// by POST request

module.exports = x => {
	console.log('Process payload')
	var out = JSON.stringify(x)
	console.log(`Recieved ${out}`)
	var uppercase = out.toUpperCase()
	console.log(`Processed data ${uppercase}`)
	return uppercase 
}
