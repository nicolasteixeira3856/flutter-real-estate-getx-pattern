import 'package:get/get.dart';
import 'package:real_estate/modules/home/home_binding.dart';

import '../modules/login/login_binding.dart';
import '../modules/login/login_page.dart';
import '../modules/home/home_page.dart';

import 'app_routes.dart';

class AppPages {
  static final pages = [
    GetPage(
        name: AppRoutes.login,
        page: () => const LoginPage(),
        transition: Transition.fade,
        transitionDuration: const Duration(milliseconds: 500),
        binding: LoginBinding()),
    GetPage(
        name: AppRoutes.home,
        page: () => const HomePage(),
        transition: Transition.fade,
        transitionDuration: const Duration(milliseconds: 500),
        binding: HomeBinding())
  ];
}
