import 'package:get/get.dart';
import 'package:real_estate/modules/login/login_binding.dart';
import 'package:real_estate/modules/login/login_page.dart';
import 'package:real_estate/routes/app_routes.dart';

class AppPages {
  static final pages = [
    GetPage(
        name: AppRoutes.login,
        page: () => const LoginPage(),
        transition: Transition.leftToRightWithFade,
        transitionDuration: const Duration(milliseconds: 500),
        binding: LoginBinding()),
  ];
}
