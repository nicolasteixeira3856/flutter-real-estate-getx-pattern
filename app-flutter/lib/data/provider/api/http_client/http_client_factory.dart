import 'package:real_estate/data/provider/api/http_client/http_client.dart';
import 'package:real_estate/data/provider/api/http_client/i_http_client.dart';

class HttpClientFactory {
  IHttpClient get client => HttpClient();
  String get url => 'https://df6e-2804-1b3-6001-f42a-9831-4f60-66ee-bdac.ngrok.io';
}
