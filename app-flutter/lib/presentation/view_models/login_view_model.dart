import 'package:get/get.dart';
import 'package:flutter/material.dart';
import 'package:string_validator/string_validator.dart';

class LoginViewModel extends GetxController {
  final formKey = GlobalKey<FormState>();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  RxBool switchLogin = false.obs;

  changeSwitchLogin() => switchLogin.toggle().value;

  String? validateEmail(String? email) {
    if (email == null || email.isEmpty) return 'Field e-mail can\'t be empty';
    if (!isEmail(email)) return 'Enter a valid e-mail';

    return null;
  }

  String? validatePassword(String? password) {
    if (password == null || password.isEmpty) {
      return 'Field password can\'t be empty';
    }

    if (password.length < 6) return 'Password must be bigger than 5 characters';

    return null;
  }

  validateForm() {
    if (formKey.currentState!.validate()) {
      print(emailController.value.text);
      print(passwordController.value.text);
    }
  }
}