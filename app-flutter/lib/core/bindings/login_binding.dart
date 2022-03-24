import 'package:get/instance_manager.dart';
import 'package:real_estate/data/repository/user_repository.dart';
import 'package:real_estate/presentation/view_model/login_view_model.dart';

class LoginBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<LoginViewModel>(() => LoginViewModel());
    Get.lazyPut<UserRepository>(() => UserRepository());
  }
}