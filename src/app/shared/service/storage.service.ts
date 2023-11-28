import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setItem(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify({ value }));
  }
  public getItem<T>(key: string): T | null {
    const data: string | null = sessionStorage.getItem(key);

    if (data !== null) {
      return JSON.parse(data).value;
    }

    return null;
  }

}
