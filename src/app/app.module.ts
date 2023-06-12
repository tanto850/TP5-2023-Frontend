import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversorComponent } from './components/conversor/conversor.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { PortalComponent } from './components/portal/portal.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DownloaderComponent } from './components/downloader/downloader.component';
import { IpinfoComponent } from './components/ipinfo/ipinfo.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversorComponent,
    HoroscopoComponent,
    PortalComponent,
    HeaderComponent,
    FooterComponent,
    DownloaderComponent,
    IpinfoComponent,
    ProductoComponent,
    FormProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
