import { Routes ,RouterModule} from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { AddProductComponent } from './pages/agregarProducto/add-product/add-product.component';
import { AddImagesComponent } from './pages/agregarProducto/add-images/add-images.component';
import { AddSizesComponent } from './pages/agregarProducto/add-sizes/add-sizes.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { ViewVentaComponent } from './pages/view-venta/view-venta.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { CuponComponent } from './pages/cupon/cupon.component';
import { CuponRegisterComponent } from './pages/cupon-register/cupon-register.component';
import { CuponUpdateComponent } from './pages/cupon-update/cupon-update.component';


const appRoutes:Routes = [ 

    {
        path:'',
        component:PagesComponent,
        children:[
            {path:'home',component:HomeComponent},
            {path:'products',component:ProductsComponent},
            {path:'product/:id',component:ViewProductComponent},
            {path:'add-product',component:AddProductComponent},
            {path:'add-image/:id',component:AddImagesComponent},
            {path:'add-size/:id',component:AddSizesComponent},
            {path:'ventas',component:VentasComponent},
            {path:'venta/:id',component:ViewVentaComponent},
            {path:'usuario',component:UsuariosComponent},
            {path:'usuarioRegister',component:RegisterUserComponent},
            {path:'cupon',component:CuponComponent},
            {path:'cuponRegister',component:CuponRegisterComponent},
            {path:'usuarioUpdate',component:CuponUpdateComponent},
            {path:'',redirectTo:'/products',pathMatch:'full'}
        ]
    },
    {path:'login',component:LoginComponent}


   
    
    
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash:true});