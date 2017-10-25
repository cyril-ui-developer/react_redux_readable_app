export const validate = (values) => {
    const errors = {};
    if(!values.name || !values.name) {
      errors.name = {
        message: 'You need to select category'
      }
    }
    if(!values.title || !values.title) {
      errors.title = {
        message: 'You need to enter title'
      }
    }
    if(!values.author || !values.author) {
      errors.author = {
        message: 'You need to enter author'
      }
    }
    return errors;
  }