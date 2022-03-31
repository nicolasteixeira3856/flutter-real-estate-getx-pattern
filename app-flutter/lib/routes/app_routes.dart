import 'package:get/get.dart';
import 'package:real_estate/modules/login/login_binding.dart';
import 'package:real_estate/modules/login/login_page.dart';

appRoutes() => [
      GetPage(
          name: '/login',
          page: () => const LoginPage(),
          transition: Transition.leftToRightWithFade,
          transitionDuration: const Duration(milliseconds: 500),
          binding: LoginBinding()),
    ];
