import  Joi  from "joi";

const authValidator = Joi.object({
    username: Joi.string().min(2).max(20).required().messages({
        "string.base": "Username must be lower case, start with a letter and allowed to include characters or characters and numbers",
        "string.min":"Username can't be less than 2 characters",
        "string.max":"Username  can't be more than 20 characters",
        "string.empty":"Username is not allowed to be empty"
    }),
    password: Joi.string().min(2).max(20).required().messages({
        "string.base": "Password is allowed to include characters or characters and numbers from 2 to 20",
        "string.min":"Password can't be less than 2 characters",
        "string.max":"Password  can't be more than 20 characters",
        "string.empty":"Password is not allowed to be empty"
    })
})

export { authValidator }