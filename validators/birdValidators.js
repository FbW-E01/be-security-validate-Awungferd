import {body, check} from "express-validator"
export const reportValidator =[
	body("species").isLength({min:3}).withMessage("Species name too short"),
	body("species").isLength({max:80}).withMessage("Species name too long"),
	body("species").contains({isNumeric: false}).withMessage("Species must not contain a number"),
	body("notes").isLength({Max: 140}).withMessage("Notes must be at most 140 characters long"),
	body("notes").isAlpha('en-US', {ignore: ' '}).withMessage("Notes must contain no numbers or special symbols"),
	body("estimatedAmount").isNumeric(true).withMessage("Estimated amount must be a number")
]
