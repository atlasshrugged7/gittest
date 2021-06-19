import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = 'e249f49d889a4875a46a0ade26b41dc6';

  constructor(private http:HttpClient) { }

  initArticles(){
   return this.http.get('https://newsapi.org/v2/top-headlines?q=Digital&apiKey='+this.api_key);
  }

}
