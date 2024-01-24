export const addressHasRequiredFields = (value) => {
    const requiredFields = ['last_name', 'first_name', 'address', 'building', 'apartment'];
    for (let field of requiredFields) {
        if (!value.hasOwnProperty(field)) {
            throw new Error(`Le champ ${field} est manquant dans l'adresse de livraison.`);
        }
    }
}

export const addressNonEmptyFields = (value) => {
    const nonEmptyFields = ['last_name', 'first_name', 'address'];
    for (let field of nonEmptyFields) {
        if (value[field] === '' || value[field] == null) {
            throw new Error(`Le champ ${field} ne peut pas être vide.`);
        }
    }
}

export default { addressHasRequiredFields, addressNonEmptyFields };
