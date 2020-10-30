import {ValidationErrors} from 'final-form';
import validator from 'validator';
import isMobilePhone from 'validator/lib/isMobilePhone';
import isAlpha from 'validator/lib/isAlpha';

export interface FormValues {
    email: string;
    password: string;
    passwordConfirmation: string;
    firstName: string;
    lastName: string;
    cel: string;
    typeDocumentId: number;
    documentId: string;
    city: number;
}


export default function validateRegister(values: FormValues): ValidationErrors {
    const errors: Partial<{[P in keyof FormValues]: string}> = {};
    if (!values.email) {
        errors.email = 'Debes introducir un correo';
    } else if (!validator.isEmail(values.email)) {
        errors.email = 'Introduce una dirección de correo electrónico válida';
    }

    if (!values.firstName) {
        errors.firstName = 'Introduce tus nombres';
    } else if (values.firstName.length < 3) {
        errors.firstName = 'Mínimo 3 caracteres';
    } else if (values.firstName.length > 20) {
        errors.firstName = 'Máximo 20 caracteres';
    } else if (!isAlpha(values.firstName.replace(/\s+/g, ''), 'es-ES')) {
        errors.firstName = 'Sólo caracteres alfabéticos';
    }

    if (!values.lastName) {
        errors.lastName = 'Introduce tu apellido';
    } else if (values.lastName.length < 3) {
        errors.lastName = 'Mínimo 3 caracteres';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Máximo 20 caracteres';
    } else if (!isAlpha(values.lastName.replace(/\s+/g, ''), 'es-ES')) {
        errors.lastName = 'Sólo caracteres alfabéticos';
    }

    if (!values.cel) {
        errors.cel = 'Introduce un número';
    } else if (
        !isMobilePhone(values.cel, 'es-ES') &&
        !isMobilePhone(values.cel, 'en-US')
    ) {
        errors.cel = 'Ingresa un número válido';
    }

    if (!values.typeDocumentId) {
        errors.typeDocumentId = 'Selecciona un tipo de documento';
    }

    if (!values.city) {
        errors.city = 'Selecciona una ciudad';
    }

    if (!values.documentId) {
        errors.documentId = 'Ingresa un número o identificación';
    } else if (values.documentId.length < 8) {
        errors.documentId = 'Mínimo 8 caracteres';
    } else if (values.documentId.length > 20) {
        errors.documentId = 'Máximo 20 caracteres';
    }

    if (!values.password) {
        errors.password = 'Introduce una contraseña';
    } else if (values.password.length < 8) {
        errors.password = 'Mínimo 8 caracteres';
    }
    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = 'Introduce la confirmación de la contraseña';
    } else if (values.passwordConfirmation !== values.password) {
        errors.passwordConfirmation = 'La contraseña no coincide';
    }

    return errors;
}
