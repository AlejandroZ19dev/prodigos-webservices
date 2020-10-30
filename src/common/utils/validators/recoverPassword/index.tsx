import {ValidationErrors} from 'final-form';
import validator from 'validator';

export interface FormValues {
    email: string;
}

export default function validate(values: FormValues): ValidationErrors {
    const errors: Partial<FormValues> = {};
    if (!values.email) {
        errors.email = 'Debes introducir un correo';
    } else if (!validator.isEmail(values.email)) {
        errors.email = 'Introduce una dirección de correo electrónico válida';
    }
    return errors;
}
