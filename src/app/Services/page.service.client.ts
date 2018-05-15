import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class PageService {

  constructor() { }

pages = [
  { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
  { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
  { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
];


  createPage(websiteId, page) {
    page._id = Math.floor(Math.random() * Math.floor(10000)).toString;
    page.websiteId = websiteId
    this.pages.push(page);
    return page;
  }

  findPageByWebsiteId(websiteId) {
    let result = []
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i].websiteId === websiteId) {  
         result.push(this.pages[i]); 
       }
    }
    return result
  }

  findPageById(pageId) {
    for (let i = 0; i <this.pages.length; i++) {
      if (this.pages[i]._id === pageId) {
        return this.pages[i];
      }
    }
  }

  updatePage(pageId, page) {
    var oldPage = this.findPageById(pageId);
    var index = this.pages.indexOf(oldPage);
    this.pages[index].description = page.description;
    this.pages[index].name = page.name;
  }

  deletePage(pageId){
    var oldPage = this.findPageById(pageId);
    const index = this.pages.indexOf(oldPage);
    this.pages.splice(index, 1);
  }
}


