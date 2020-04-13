"use strict";
exports.__esModule = true;
function createUser(_a) {
    var name = _a.name, email = _a.email, password = _a.password;
    var user = {
        name: name,
        email: email,
        password: password
    };
}
exports["default"] = createUser;
/*
   export default function createUser(name = '', email: string, password: string) {
   const user = {
   name,
   email,
   password
   }
   }
 */
