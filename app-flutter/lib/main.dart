import 'package:flutter/material.dart';
import 'package:real_estate/routes/app_pages.dart';
import 'package:get/get.dart';
import 'package:real_estate/routes/app_routes.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      smartManagement: SmartManagement.full,
      title: 'Real Estate',
      initialRoute: AppRoutes.login,
      getPages: AppPages.pages,
    );
  }
}
