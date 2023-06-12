import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversorComponent } from './components/conversor/conversor.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { PortalComponent } from './components/portal/portal.component';
import { DownloaderComponent } from './components/downloader/downloader.component';
import { IpinfoComponent } from './components/ipinfo/ipinfo.component'
import { ProductoComponent } from './components/producto/producto.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component'

const routes: Routes = [
  {path:"conversor", component: ConversorComponent},
  {path:"horoscopo", component: HoroscopoComponent},
  {path:"portal", component: PortalComponent},
  {path:"downloader", component: DownloaderComponent},
  {path:"ipinfo", component: IpinfoComponent},
  {path:"productos", component: ProductoComponent},
  {path:"formproducto/:id", component: FormProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
