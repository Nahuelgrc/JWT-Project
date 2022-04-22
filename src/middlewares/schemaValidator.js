const Joi = require("joi");
const _ = require("lodash");

module.exports = (schema) => {
  // return the validation middleware
  //   return (req, res, next) => {
  return (req, res, next) => {
    if (schema) {
      const { value, error } = schema.validate(req.body);

      if (error) {
        // Joi Error
        const JoiError = {
          status: "failed",
          error: {
            original: error._object,
            // fetch only message and type from each error
            details: _.map(error.details, ({ message, type }) => ({
              message: message.replace(/['"]/g, ""),
              type,
            })),
          },
        };

        // Send back the JSON error response
        res.status(422).json(JoiError);
      }
      // Replace req.body with the data after Joi validation
      req.body = value;
      next();
    }

    next();
  };
};
