import 'package:real_estate/data/model/login_model.dart';
import 'package:real_estate/data/provider/api/http_client/http_client.dart';

import '../model/user_model.dart';

class LoginRepository {
  final HttpClient http;

  LoginRepository({required this.http});

  Future<UserModel> makeLogin(LoginModel loginModel) async {
    try {
      final response = await http.post(
          url: "${http.apiUrl}/users/authenticate",
          header: {'Content-Type': 'application/json'},
          body: loginModel.toJson());
      if (response.statusCodeIsOk) return UserModel.fromJson(response.body);
      throw Exception();
    } catch (e) {
      rethrow;
    }
  }
}
