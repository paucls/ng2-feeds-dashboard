import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  save(name, data) {
    let localData: any = localStorage.getItem('ng2-feeds-dashboard');
    if (localData) {
      localData = JSON.parse(localData);
    } else {
      localData = {};
    }

    localData[name] = data;

    localStorage.setItem('ng2-feeds-dashboard', JSON.stringify(localData))
  }

  get(name) {
    let data = JSON.parse(localStorage.getItem('ng2-feeds-dashboard'));
    if (!data) {
      return undefined;
    }
    if (name) {
      if (data[name]) {
        return data[name];
      } else {
        return {};
      }
    }
    return data;
  }

}
