import 'package:get/get.dart';
import 'package:real_estate/data/model/user_model.dart';

class HomeViewModel extends GetxController {
  final UserModel injectedUserModel;

  HomeViewModel({required this.injectedUserModel});
}
