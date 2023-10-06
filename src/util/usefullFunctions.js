export const validate = (values) => {
    const errors = {};
    if (!values.profileImage) {
        errors.profileImage = "Required";
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
    if (!values.password) {
        errors.password = "Required";
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = " required";
    } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Password are not identical";
    }
    return errors;
};
