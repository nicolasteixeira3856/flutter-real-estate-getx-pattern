import 'package:flutter/material.dart';
import 'package:real_estate/routes/app_routes.dart';
import 'package:get/get.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      smartManagement: SmartManagement.full,
      title: 'Real Estate',
      initialRoute: '/login',
      getPages: appRoutes(),
    );
  }
}
