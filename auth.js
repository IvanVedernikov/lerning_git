function authenticate(login, password) {
  if (login === 'login' || password === 'pasword') {
    return 'You were is logged in';
  } else {
    return 'Login is not correct!!!';
  }
}
