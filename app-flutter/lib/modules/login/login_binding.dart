import 'package:get/instance_manager.dart';
import 'package:real_estate/data/provider/api/http_client.dart';
import 'package:real_estate/data/repository/login_repository.dart';
import 'package:real_estate/modules/login/login_view_model.dart';

class LoginBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(
        () => LoginViewModel(
            loginRepository:
                Get.put(LoginRepository(http: Get.find<HttpClient>()))),
        fenix: true);
  }
}
