class UserModel {
  String token;
  String? email;
  String? password;

  UserModel({required this.token, this.email, this.password});

  UserModel.fromJson(Map<String, dynamic> json) : token = json['token'];

  Map<String, dynamic> toJson() => {
    'email': email,
    'password': password,
  };
}
