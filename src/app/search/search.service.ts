import { ApiURL } from '../shared/apiURL';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class SearchService {

  constructor(private http: HttpClient, private apiUrl: ApiURL) { }

  onSearch(search: string) {
    return this.http.get(this.apiUrl.structureSearchURL(search));
  }
}