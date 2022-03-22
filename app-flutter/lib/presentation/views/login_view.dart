import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../presentation/view_models/login_view_model.dart';

class LoginView extends GetWidget<LoginViewModel> {
  const LoginView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Obx(() {
        return Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Image.asset('images/logo.png'),
              const SizedBox(
                height: 16,
              ),
              Form(
                  key: controller.formKey,
                  child: Column(
                    children: [
                      TextFormField(
                        decoration: const InputDecoration(labelText: 'E-mail'),
                        validator: (email) => controller.validateEmail(email),
                        controller: controller.emailController,
                      ),
                      const SizedBox(
                        height: 8,
                      ),
                      TextFormField(
                        decoration:
                            const InputDecoration(labelText: 'Password'),
                        obscureText: true,
                        validator: (password) => controller.validatePassword(password),
                        controller: controller.passwordController,
                      ),
                      const SizedBox(
                        height: 8,
                      ),
                      Row(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          const Text('Login'),
                          Switch(
                            value: controller.switchLogin.value,
                            onChanged: (_) => controller.changeSwitchLogin(),
                          ),
                          const Text('Sign Up')
                        ],
                      ),
                      const SizedBox(
                        height: 8,
                      ),
                      ElevatedButton(
                          onPressed: () => controller.validateForm(),
                          style: ElevatedButton.styleFrom(
                              minimumSize: Size(Get.width, Get.height * 0.05)),
                          child: Text(controller.switchLogin.value
                              ? 'Sign Up'
                              : 'Login'))
                    ],
                  ))
            ],
          ),
        );
      }),
    );
  }
}
