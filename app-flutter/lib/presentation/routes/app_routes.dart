import 'package:get/get.dart';
import 'package:real_estate/core/bindings/login_binding.dart';
import 'package:real_estate/presentation/views/login_view.dart';

appRoutes() => [
      GetPage(
          name: '/login',
          page: () => const LoginView(),
          transition: Transition.leftToRightWithFade,
          transitionDuration: const Duration(milliseconds: 500),
          binding: LoginBinding()),
    ];
