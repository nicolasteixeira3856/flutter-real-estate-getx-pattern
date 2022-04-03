import 'dart:developer';

import 'package:get/get.dart';
import 'package:flutter/material.dart';
import 'package:real_estate/data/model/login_model.dart';
import 'package:real_estate/data/model/user_model.dart';
import 'package:real_estate/data/repository/login_repository.dart';
import 'package:real_estate/routes/app_routes.dart';
import 'package:string_validator/string_validator.dart';

class LoginViewModel extends GetxController {
  final LoginRepository injectedLoginRepository;
  final UserModel injectedUserModel;

  LoginViewModel({required this.injectedLoginRepository, required this.injectedUserModel});

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
      processLogin();
    }
  }

  processLogin() async {
    try {
      await createLogin();
    } catch (e) {
      log("Ocorreu um erro");
    }
  }

  createLogin() async {
    LoginModel loginModel = LoginModel(
        email: emailController.value.text,
        password: passwordController.value.text);

    makeLogin(loginModel);
  }

  makeLogin(LoginModel loginModel) async {
    final userModel = await injectedLoginRepository.makeLogin(loginModel);
    initSession(userModel);
    Get.offAllNamed(AppRoutes.home);
  }

  initSession(UserModel userModel) {
    injectedUserModel.id = userModel.id;
    injectedUserModel.token = userModel.token;
    injectedUserModel.email = userModel.email;
  }
}
