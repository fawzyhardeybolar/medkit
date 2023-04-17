const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.code === 11000) {
    errors.email = "This email has already been registered pls log in";
    return errors;
  }

  if (err.message === "no email") {
    errors.email = "This email have not been registered";
    return errors;
  }

  if (err.message === "incorrect password") {
    errors.email = "Invalid email or password";
    errors.password = " Invalid email or password";
    return errors;
  }

  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports = handleErrors;
