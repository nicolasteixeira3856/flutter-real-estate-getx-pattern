import 'package:get/instance_manager.dart';
import 'package:real_estate/presentation/view_models/login_view_model.dart';

class LoginBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<LoginViewModel>(() => LoginViewModel(), fenix: true);
  }
}