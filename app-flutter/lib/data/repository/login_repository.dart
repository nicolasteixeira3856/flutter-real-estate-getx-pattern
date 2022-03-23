import 'package:get/get.dart';
import 'package:real_estate/data/model/login_model.dart';
import 'package:real_estate/data/sources/api/http_client/http_client_factory.dart';

class LoginRepository {
  final http = Get.put(HttpClientFactory());

  Future makeLogin(LoginModel loginModel) async {
    try {
      final response = await http.client.post(
          url: "${http.url}/users/authenticate",
          header: {
            'Content-Type': 'application/json'
          },
          body: loginModel.toJson());
      if (response.statusCodeIsOk) return LoginModel.fromJson(response.body);
      throw Exception();
    } catch (e) {
      rethrow;
    }
  }
}
