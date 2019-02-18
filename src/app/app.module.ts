import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { ImagenPipe } from './pipes/imagen.pipe';
import { AddProductComponent } from './pages/agregarProducto/add-product/add-product.component';
import { AddImagesComponent } from './pages/agregarProducto/add-images/add-images.component';
import { AddSizesComponent } from './pages/agregarProducto/add-sizes/add-sizes.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { ViewVentaComponent } from './pages/view-venta/view-venta.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { CuponRegisterComponent } from './pages/cupon-register/cupon-register.component';
import { CuponComponent } from './pages/cupon/cupon.component';
import { CuponUpdateComponent } from './pages/cupon-update/cupon-update.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ViewProductComponent,
    ProfileComponent,
    ImagenPipe,
    AddProductComponent,
    AddImagesComponent,
    AddSizesComponent,
    PagesComponent,
    LoginComponent,
    VentasComponent,
    ViewVentaComponent,
    UsuariosComponent,
    RegisterUserComponent,
    CuponRegisterComponent,
    CuponComponent,
    CuponUpdateComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
