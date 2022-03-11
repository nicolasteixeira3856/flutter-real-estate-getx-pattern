import 'package:get/instance_manager.dart';
import 'package:real_estate/view_model/login_view_model.dart';

class Binding extends Bindings {
  @override
  void dependencies() {
    // TODO: implement dependencies
    Get.lazyPut<LoginViewModel>(() => LoginViewModel());
  }
}