import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:real_estate/data/provider/api/http_client/i_http_client.dart';

class HttpClient implements IHttpClient {
  @override
  Future<HttpClientResponse> delete(
      {required String url,
      required Map<String, String> header,
      required Map<String, dynamic> body}) async {
    final response = await http.delete(Uri.parse(url),
        headers: header, body: jsonEncode(body));
    return HttpClientResponse(
        body: jsonDecode(response.body),
        statusCode: response.statusCode,
        header: header);
  }

  @override
  Future<HttpClientResponse> get(
      {required String url, required Map<String, String> header}) async {
    final response = await http.get(Uri.parse(url), headers: header);
    return HttpClientResponse(
        body: jsonDecode(response.body),
        statusCode: response.statusCode,
        header: header);
  }

  @override
  Future<HttpClientResponse> post(
      {required String url,
      required Map<String, String> header,
      required Map<String, dynamic> body}) async {
    final response = await http.post(Uri.parse(url),
        headers: header, body: jsonEncode(body));
    return HttpClientResponse(
        body: jsonDecode(response.body),
        statusCode: response.statusCode,
        header: header);
  }

  @override
  Future<HttpClientResponse> put(
      {required String url,
      required Map<String, String> header,
      required Map<String, dynamic> body}) async {
    final response =
        await http.put(Uri.parse(url), headers: header, body: jsonEncode(body));
    return HttpClientResponse(
        body: jsonDecode(response.body),
        statusCode: response.statusCode,
        header: header);
  }
}
