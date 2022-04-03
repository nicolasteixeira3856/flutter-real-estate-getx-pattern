import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:real_estate/modules/home/home_view_model.dart';

class HomePage extends GetView<HomeViewModel> {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(controller.injectedUserModel.token),
          Text(controller.injectedUserModel.email)
        ],
      ),
    );
  }
}
