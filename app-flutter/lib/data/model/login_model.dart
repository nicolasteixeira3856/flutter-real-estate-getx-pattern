class LoginModel {
  String token;
  String? email;
  String? password;

  LoginModel({required this.token, this.email, this.password});

  LoginModel.fromJson(Map<String, dynamic> json) : token = json['token'];

  Map<String, dynamic> toJson() => {
    'email': email,
    'password': password,
  };
}
