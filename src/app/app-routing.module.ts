import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagickComponent } from './magick/magick.component';
import { MagickBasicComponent } from './magick-basic/magick-basic.component';
import { MagickCombinationsComponent } from './magick-combinations/magick-combinations.component';
import { MagickConditionsComponent } from './magick-conditions/magick-conditions.component';
import { MagickAdvancedComponent } from './magick-advanced/magick-advanced.component';

const routes: Routes = [
  { path: '', redirectTo: '/magick-basic', pathMatch: 'full' },
  { path : 'magick/:type', component: MagickComponent },
  { path : 'magick-basic', component: MagickBasicComponent, data: { animation: 'MagickBasicPage' }},
  { path : 'magick-combinations', component: MagickCombinationsComponent, data: { animation: 'MagickCombinationsPage' }},
  { path : 'magick-advanced', component: MagickAdvancedComponent, data: { animation: 'MagickAdvancedPage' }},
  { path : 'magick-conditions', component: MagickConditionsComponent, data: { animation: 'MagickConditionsPage' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
