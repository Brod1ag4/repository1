let authUserData = null;
let userDatabase = []; // массив с зарегистрированными пользователями

//функция регистрации
function register(email, password) {
  let key = null;
  if (validateEmailAndPassword(email, password)) {
    key = userDatabase.findIndex(
      (user) => user.email === email && user.password === password
    );
    if (key === -1) {
      userDatabase.push({ email: email, password: password });
      return true;
    }
  }
  return false;
}
//функция входа
function signIn(email, password) {
  if (validateEmailAndPassword(email, password)) {
    let number = null;
    number = userDatabase.findIndex(
      (user) => user.email === email && user.password === password
    );
    if (number != -1 && userDatabase[number].password === password) {
      authUserData = userDatabase[number];
      return true;
    }
  }
  return false;
}
//проверка почты и пароля
function validateEmailAndPassword(email, password) {
  if (
    email.match(/^[\w-.]+@[\w-]+.[a-z]{2,4}$/i) !== null &&
    password.length === 6 &&
    password[0] === password[0].toUpperCase() &&
    password.match(/\d+/) !== null
  ) {
    return true;
  }
  return false;
}
//функция выхода
function signOut() {
  authUserData = null;
}
// функция восстановления пароля
function resetPassword(email, oldPassword, newPassword) {
  number = userDatabase.findIndex(
    (user) => user.email === email && user.password === oldPassword
  );
  if (number === -1) {
    return false;
  } else {
    userDatabase[number].password = newPassword;
    return true;
  }
  return false;
}
//проверка авторизованости пользователя
function isAuth() {
  if (authUserData === null) {
    return false;
  } else {
    return true;
  }
}

//Валидатор

function validator(value) {
  let test = true; //поле для хранения вазвращаевомого булевого значения
  return {
    test_value: value,
    isString: function () {
      if (
        (test && typeof this.test_value === "string") ||
        this.test_value instanceof String
      ) {
        this.test = true;
        return this;
      }
      this.test = false;
      return this;
    },
    isNumber() {
      if (test && typeof this.test_value === "number") {
        this.test = true;
        return this;
      }
      this.test = false;
      return this;
    },
    isArray() {
      if (Array.isArray(this.test_value)) {
        this.test = true;
        return this;
      }
      this.test = false;
      return this;
    },
    isFloat() {
      if (
        test &&
        validator(this.test_value).isNumber() &&
        this.test_value.toString().indexOf(".") != -1
      ) {
        this.test = true;
        return this;
      }
      this.test = false;
      return this;
    },
    min(element) {
      if (test && this.test_value >= element) {
        this.test = true;
        return this;
      }
      this.test = false;
      return this;
    },
    max(element) {
      if (test && this.test_value <= element) {
        this.test = true;
        return this;
      }
      this.test = false;
      return this;
    },
    minLenght(valueArray) {
      if (test && this.test_value.length > valueArray) {
        this.test = true;
        return this;
      }
      this.test = false;
      return this;
    },
    maxLenght(valueArray) {
      if (test && this.test_value.length <= valueArray) {
        this.test = true;
        return this;
      }
      this.test = false;
      return this;
    },
    equal(validateEmailAndPasswordValue) {
      if (
        test &&
        validateEmailAndPasswordValue.toString() === this.test_value.toString()
      ) {
        this.test = true;
        return this;
      }
      this.test = false;
      return this;
    },
    isDate() {
      if (test && this.test_value.match(/^\d{1,2}\.\d{1,2}\.\d{4}$/) != null) {
        this.test = true;
        return this;
      }
      this.test = false;
      return this;
    },
    isEmail() {
      if (
        test &&
        this.test_value.match(/^[\w-.]+@[\w-]+.[a-z]{2,4}$/i) != null
      ) {
        this.test = true;
        return this;
      }
      this.test = false;
      return this;
    },
    validate() {
      return this.test;
    },
  };
}
