import validator from 'validator';
import {ValidationErrors} from 'final-form';

export interface FormValues {
    email: string;
    password: string;
}

export default function validate(values: FormValues): ValidationErrors {
    const errors: Partial<FormValues> = {};
    if (!values.email) {
        errors.email = 'Debes introducir un correo';
    } else if (!validator.isEmail(values.email)) {
        errors.email = 'Introduce una dirección de correo electrónico válida';
    }

    if (!values.password) {
        errors.password = 'Introduce una contraseña';
    } else if (values.password.length < 8) {
        errors.password = 'Mínimo 8 caracteres';
    }

    return errors;
}
