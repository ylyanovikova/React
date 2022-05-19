import Joi from "joi";

const carValidator = Joi.object({
    // model: Joi.string().min(2).max(20).required().messages({
    //     'string.empty': "Model mustn't be empty",
    //     'string.min': "Model must be more than 2 charachters",
    //     'string.max': "Model must be less than 20 charachters"
    // }),
    model: Joi.string().regex(/^[A-Za-zА-Яа-яІіЇї]{1,20}$/).required().messages({
        'string.pattern.base': "Model must be only letters from 1 to 20 charachters"
    }),
    price: Joi.number().min(1).max(1000000).required().messages({
        'number.empty': "Price mustn't be empty",
        'number.min':"Price can't be less than 1 ",
        'number.max': "Price can't be more than 1000000"
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.empty': "Year can't be empty",
        'number.min': "Year can't be less than 1990",
        'number.max': "Year can't be more than now"
    })
});

export {carValidator}