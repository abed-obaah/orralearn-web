export const validate = (values) => {
    const errors = {};
    if (!values.image) {
        errors.image = "Required";
    }
    if (!values.username) {
        errors.username = "Required";
    }
    if (!values.firstName) {
        errors.firstName = "Required";
    }
    if (!values.lastName) {
        errors.lastName = "Required";
    }
    if (!values.userBio) {
        errors.userBio = "Required";
    }
    if (!values.email) {
        errors.email = "Required";
    }

    return errors;
};

export const changePasswordValidation =(values)=>{
    const errors = {};

    if (!values.currentPassword) {
        errors.currentPassword = "Required";
    }
    if (!values.newPassword) {
        errors.newPassword = "Required";
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = " required";
    } else if (values.newPassword !== values.confirmPassword) {
        errors.confirmPassword = "Password are not identical";
    }
    return errors;
}