import { ValidationError } from "../errors/SubErrors.js";

export const validate = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (err) {
      if (err.errors || err.issues) {
        const details = {};
        const errorsList = err.errors || err.issues || [];
        errorsList.forEach((e) => {
          const path = e.path.slice(1).join(".") || e.path.join(".");
          details[path] = e.message;
        });

        const validationError = new ValidationError("Validation failed.", details);
        validationError.code = "VALIDATION_ERROR";
        return next(validationError);
      }
      return next(err);
    }
  };
};
