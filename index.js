import express from 'express';
import {validationResult } from 'express-validator'
import {sightedBirds} from "./birdData/birdSightings.js"


const server = express();
server.use(express.json());
server.use((req, res, next) => {
	console.log(`${req.method} ${req.path}`)
	next()
})

/* server.get("/birds", (req, res, next) => {
	res.send({
		sightedBirds
	})

}) */

server.post("/birds", (req,res)=>{
	res.send({sightedBirds})
})



server.listen(9006, () => {
	console.log('listening on http://localhost:9006');
})