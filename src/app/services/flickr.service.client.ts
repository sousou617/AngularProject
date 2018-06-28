import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

// injecting service into module
@Injectable()

export class FlickrService  {
	key = "5e184c44a22f98351d43b6f7e1e3b17e";
	secret = "ac4f36488b2c2975";
	urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";
	
	constructor(private _http: Http) { }

    searchPhotos(searchTerm: any) {
    	const url = this.urlBase.replace('API_KEY', this.key).replace('TEXT', searchTerm);
    	return this._http.get(url);
	}

}



