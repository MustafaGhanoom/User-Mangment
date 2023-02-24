// local-storage.service.ts
import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private currentUserKey = 'currentUser';

  constructor(private localStorage: LocalStorage) { }
  async setItem(key: string, value: any) {
    await this.localStorage.setItem(key, value).toPromise();}
    async getItem(key: string) {
      return await this.localStorage.getItem(key).toPromise();
    }
  
    async removeItem(key: string) {
      await this.localStorage.removeItem(key).toPromise();
    }

  setCurrentUser(user: any) {
    this.localStorage.setItem(this.currentUserKey, user).subscribe(() => {});
  }

  getCurrentUser() {
    return this.localStorage.getItem<any>(this.currentUserKey);
  }

  removeCurrentUser() {
    this.localStorage.removeItem(this.currentUserKey).subscribe(() => {});
  }
}
