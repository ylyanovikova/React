import Joi from "joi";

const carValidator = Joi.object({
    model: Joi.string().regex(/^[A-Za-z]{1,20}$/).required().messages({
        "string.pattern.base": "Model can be letter from 1 to 20 charachters"
    }),
    price: Joi.number().min(1).max(1000000).required().messages({
        'number.min': "Price can't be less than 1",
        'number.max': "Price can't be more than 1000000",
        'number.empty': "Field can't be empty"
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.empty': "Field can't be empty",
        'number.min': "Year can't be less than 1990",
        'number.max': "Year can't be more than now"
    })
})

export {
    carValidator
}