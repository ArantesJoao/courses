export class AuthenticationSystem {
  static login(authenticableClass, password) {
    if (AuthenticationSystem.isAuthenticable(authenticableClass)) {
      return authenticableClass.authenticate(password);
    }
    return false;
  }
  static isAuthenticable(authenticableClass) {
    return (
      "authenticate" in authenticableClass &&
      authenticableClass.authenticate instanceof Function
    );
  }
}
