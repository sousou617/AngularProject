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
    websiteId._id = Math.floor(Math.random() * Math.floor(10000)).toString;
    this.pages.push(websiteId);
    return websiteId;
  }

  findPageByWebsiteId(websiteId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === websiteId) {  
        return this.pages[x]; }
    }
  }

  findPageById(pageId) {
    for (let i = 0; i <this.pages.length; i++) {
      if (this.pages[i]._id === pageId) {
        return this.pages[i];
      }
    }
  }

  updatePage(pageId, page) {
    var oldWeb = this.findPageById(pageId);
    var index = this.pages.indexOf(oldWeb);
    this.pages[index]._id = pageId.name;
    this.pages[index].description = pageId.description;
  }

  deletePage(pageId){
    var page = this.findPageById(pageId);
    var index = this.pages.indexOf(page);
    this.pages.splice(index, 1);
  }
}


