import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { DropDownModule } from 'src/app/shared/components/dropdown/dropdown.module';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { MenuModel } from './model/menu.model';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    DropDownModule,
    SearchComponent,
    FormsModule,
    NgIf,
    NgFor,
    AsyncPipe,
  ],
  providers: [HeaderService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searched = ``;
  menus$: Observable<MenuModel[]>;

  constructor(private headerService: HeaderService) {
    this.menus$ = this.headerService.getMenus();
  }

  getValueSearched(searched: string) {
    console.log(searched);
  }
}
