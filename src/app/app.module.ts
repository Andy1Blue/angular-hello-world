import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';

import localePl from '@angular/common/locales/pl';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

registerLocaleData(localePl);

@NgModule({
  declarations: [AppComponent, MenuComponent, FooterComponent],
  imports: [BrowserModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pl-PL' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
