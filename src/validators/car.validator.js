import Joi from "joi";

const carValidator = Joi.object({
    model: Joi.string().regex(/^[A-Za-z]{1,20}$/).required().messages({
        "string.pattern.base": "Model can be letter from 1 to 20 charachters",
        "string.empty":"Model is not allowed to be empty"
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        "number.min": "Price must be more than 0",
        "number.max": "Price must be less than 1000000",
        "number.base": "Price can't be empty and must to be a number"
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        "number.min": "Year must be more than 1990",
        "number.max": "Year must be less than or equire present year",
        "number.base": "Year can't be empty and must to be a number"
    })
});
export { carValidator };