export const validate = (values) => { const errors = {}; 
    if(!values.name) {
        errors.name = {
            message: "You need to select category",
            flag : true
        };
    }
    if(!values.title) {
        errors.title = {
            message: "You need to enter title",
            flag : true
        };
    }
    if (!values.author) {
        errors.author = {
            message: "You need to enter author",
            flag : true
        };
    }
    return errors;
};