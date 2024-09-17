import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { MenusModel } from '../model/menu.model';

@Injectable()
export class HeaderService {
  constructor(private httpClient: HttpClient) {}

  getMenus() {
    return this.httpClient
      .get<MenusModel>('assets/data/menu.json')
      .pipe(map((response) => response.menus));
  }
}
