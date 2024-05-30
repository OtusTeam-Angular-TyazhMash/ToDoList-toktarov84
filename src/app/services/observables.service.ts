import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {
  constructor(
    private httpClient: HttpClient
  ) { }

  httpGet(url: string) {
    return this.httpClient.get(url);
  }

  httpPost(url: string, object: Object) {
    return this.httpClient.post(url, object);
  }

  httpDelete(url: string, id: number) {
    return this.httpClient.delete(url +'/'+ id);
  }

  httpPatch(url: string, id: number, object: Object) {
    return this.httpClient.patch(url +'/'+ id, object);
  }
}
