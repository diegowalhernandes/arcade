import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'content/:id',
    component:ContentComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path: 'service',
    component:ServiceComponent
  },
  {
    path: 'contact',
    component:ContactComponent
  },
  {
    path:'card',
    component:CardComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
