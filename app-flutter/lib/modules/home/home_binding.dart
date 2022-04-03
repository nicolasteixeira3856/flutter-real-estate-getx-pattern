import 'package:get/get.dart';
import 'package:real_estate/data/model/user_model.dart';
import 'package:real_estate/modules/home/home_view_model.dart';

class HomeBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => HomeViewModel(injectedUserModel: Get.find<UserModel>()));
  }
}
