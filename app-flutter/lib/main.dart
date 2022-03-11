import 'package:flutter/material.dart';
import 'package:real_estate/shared/binding/binding.dart';
import 'package:real_estate/routes/app_routes.dart';
import 'package:get/get.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      initialBinding: Binding(),
      title: 'Real Estate',
      initialRoute: '/login',
      getPages: appRoutes(),
    );
  }
}
