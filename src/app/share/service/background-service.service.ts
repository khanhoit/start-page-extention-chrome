import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundServiceService {

  q = 'image_type=photo&pretty=true&pretty=true'
  constructor() { }

  getBackground(widthScreen, heightScreen) {
    let q = encodeURIComponent('beach');
    let per_page = 3;
    let pretty = true;
    let image_type = 'photo';
    

    let path = `${http_link}/?key=${key}&q=${q}&image_type=${image_type}&pretty=${pretty}&per_page=${per_page}&min_width=${widthScreen}&min_height=${heightScreen}`;
    // https://pixabay.com/api/?key=9860510-4f7c9710aeaeef5ec8daa65b4&q=yellow+flowers&image_type=photo&pretty=true&pretty=true&min_width=1920&min_height=1080
    // https://pixabay.com/?key=9860510-4f7c9710aeaeef5ec8daa65b4&q=red%20roses&image_type=photo&pretty=true&per_page=3&min_width=1920&min_height=1080
    return fetch(path);
  }
}

export const http_link = "https://pixabay.com/api";
export const key = "9860510-4f7c9710aeaeef5ec8daa65b4";
