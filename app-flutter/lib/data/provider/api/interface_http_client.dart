abstract class IHttpClient {
  String apiUrl();

  Future<HttpClientResponse> get(
      {required String url, required Map<String, String> header});

  Future<HttpClientResponse> post(
      {required String url,
      required Map<String, String> header,
      required Map<String, dynamic> body});

  Future<HttpClientResponse> put(
      {required String url,
      required Map<String, String> header,
      required Map<String, dynamic> body});

  Future<HttpClientResponse> delete(
      {required String url,
      required Map<String, String> header,
      required Map<String, dynamic> body});
}

class HttpClientResponse {
  final Map<String, dynamic> body;
  final int statusCode;
  final Map<String, String> header;

  bool get statusCodeIsOk => statusCode >= 200 && statusCode < 300;

  HttpClientResponse(
      {required this.body, required this.statusCode, required this.header});
}
