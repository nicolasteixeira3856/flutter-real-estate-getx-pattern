import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:real_estate/view_model/login_view_model.dart';

class LoginView extends GetWidget<LoginViewModel> {
  const LoginView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text("Isso com certeza é um teste."),
      ),
    );
  }
}
