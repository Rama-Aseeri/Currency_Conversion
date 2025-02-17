import { ConvertCurrencyComponent } from './convert-currency/convert-currency.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path: '' ,component:HomeComponent },
  {path: 'home' ,component:HomeComponent },
  {path: 'about' ,component:AboutComponent },
  {path: 'blogs' ,component:BlogsComponent },
  {path: 'contact-us' ,component:ContactUsComponent },
  {path: 'convert-currency' ,component:ConvertCurrencyComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
