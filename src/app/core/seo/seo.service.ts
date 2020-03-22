import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  setPageTitle(title: string) {
    this.title.setTitle(title);
  }

  addMetaTag(tag: MetaDefinition) {
    this.meta.addTag(tag);
  }
}
