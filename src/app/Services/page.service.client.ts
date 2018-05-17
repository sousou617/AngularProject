import { Injectable } from '@angular/core';
import { Page } from '../models/page.model.client';

// injecting service into module
@Injectable()

export class PageService {

  constructor() { }

pages: Page[] = [
  { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
  { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
  { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
];


  createPage(websiteId: string, page: Page) {
    page._id = Math.floor(Math.random() * 10000).toString;
    page.websiteId = websiteId
    this.pages.push(page);
    return page;
  }

  findPageByWebsiteId(websiteId: string) {
    let result = []
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i].websiteId === websiteId) {  
         result.push(this.pages[i]); 
       }
    }
    return result
  }

  findPageById(pageId: string) {
    for (let i = 0; i <this.pages.length; i++) {
      if (this.pages[i]._id === pageId) {
        return this.pages[i];
      }
    }
  }

  updatePage(pageId: string, page: Page) {
    var oldPage = this.findPageById(pageId);
    var index = this.pages.indexOf(oldPage);
    this.pages[index].description = page.description;
    this.pages[index].name = page.name;
  }

  deletePage(pageId: string){
    var oldPage = this.findPageById(pageId);
    const index = this.pages.indexOf(oldPage);
    this.pages.splice(index, 1);
  }
}


