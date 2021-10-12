import express from 'express';
import { validationResult } from 'express-validator'
import { sightedBirds } from "./birdData/birdSightings.js"
import { reportValidator } from "./validators/birdValidators.js"


const server = express();
server.use(express.json());
server.use((req, res, next) => {
	console.log(`${req.method} ${req.path}`)
	next()
})

server.get("/birds", (req, res) => {
	res.send({
		sightedBirds //imported from birdSightings.js
	})

})

server.post("/birds",
	reportValidator,
	(req, res) => {

	 const result = validationResult(req)
	if (!result.isEmpty()) {
			res.status(400);
			res.json({
				errors: result.errors.map(e => e.msg),
				
			});
			
			return

		}
		res.send(req.body);

		console.log(req.body);
		

	},
	)



server.listen(9006, () => {
	console.log('listening on http://localhost:9006');
})

// BONUS
// QUESTIONS: 
//1) Question: what is it called when a string contains only letters and numbers?

//ANSWER: Alphanumeric

// 2) Research: what is a mimetype? Provide a very short definition and 3 examples
// answer: 
//=> MIME = Multipurpose Internet Mail Extensions
// A mimitype is also known as media type is a text string that describes or identifies a given file format. 

// EXAMPLES: 
// => image/jpeg - JPEG image file
// => text/html - HTML document (webpage)