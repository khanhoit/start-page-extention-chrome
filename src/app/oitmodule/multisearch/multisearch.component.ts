import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-multisearch',
  templateUrl: './multisearch.component.html',
  styleUrls: ['./multisearch.component.css']
})
export class MultisearchComponent implements OnInit {
  
  @ViewChild('linkSearch') linkSearch: ElementRef;

  iconBrands;
  allBrowsers;
  faCoffee;
  textSearch;
  typeBrowser;

  constructor( private formBuilder: FormBuilder) { 
    this.allBrowsers = URLs;
    this.typeBrowser = this.allBrowsers.URL_GOOGLE;
    this.iconBrands = IconBrands;
  }
  
  ngOnInit(): void {
  }

  submitSearch(e) {
    e.preventDefault();
    this.linkSearch.nativeElement.href = this.typeBrowser + this.textSearch;
    this.linkSearch.nativeElement.click();
  }
}

export enum URLs {
  URL_GOOGLE = "https://www.google.com/search?q=",
  URL_YOUTUBE = "https://www.youtube.com/results?search_query=",
  URL_DUCKDUCKGO = "https://duckduckgo.com/?q=",
  URL_BRING = "https://www.bing.com/search?q=",
}

export const IconBrands = {
  URL_GOOGLE: "<i> google </i>",
  URL_YOUTUBE: "youtube",
  URL_DUCKDUCKGO: "duckduckgo",
  URL_BRING: "bring",
}
  
