const Joi = require("@hapi/joi");


module.exports = async (req,res,next)=>{
    try {
        const schema = Joi.object().keys({
            userId: Joi.string().required(),
            title: Joi.string().required(),
            description: Joi.string().required(),
            tag: Joi.string().allow('').default('general')
        })
        req.body = await Joi.validate(req.body,schema);
        next();
    } catch (error) {
        return res.json(error.details[0]);
    }
}