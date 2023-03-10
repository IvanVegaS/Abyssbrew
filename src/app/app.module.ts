import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MagickComponent } from './magick/magick.component';
import { UniqueTypePipe } from './magick/magick.pipe.unique-type';
import { MagickBasicComponent } from './magick-basic/magick-basic.component';
import { MagickCombinationsComponent } from './magick-combinations/magick-combinations.component';
import { MagickConditionsComponent } from './magick-conditions/magick-conditions.component';
import { MagickAdvancedComponent } from './magick-advanced/magick-advanced.component';

@NgModule({
  declarations: [
    AppComponent,
    MagickComponent,
    MagickBasicComponent,
    MagickCombinationsComponent,
    MagickConditionsComponent,
    UniqueTypePipe,
    MagickAdvancedComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
