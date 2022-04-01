class UserModel {
  int id;
  String email;
  String token;

  UserModel({required this.id, required this.token, required this.email});

  UserModel.fromJson(Map<String, dynamic> json)
      : id = json['user']['id'],
        email = json['user']['email'],
        token = json['token'];

  Map<String, dynamic> toJson() => {'id': id, 'email': email, 'token': token};
}
