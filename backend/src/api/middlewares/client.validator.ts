import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const clientValidator = () => {
    const date = new Date();
    return [
        body('nome').isString().isLength({ min: 3 }),
        // password must be at least 5 chars long
        body('cpf').isString().isLength({ min: 11, max: 11 }),
        body('data_nasc').isDate({ format: "DD/MM/YYYY" }).isBefore(date.toString()),
        body('ativo').isNumeric(),

    ]
}

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

    return res.status(422).json({
        errors: extractedErrors,
    })
}


