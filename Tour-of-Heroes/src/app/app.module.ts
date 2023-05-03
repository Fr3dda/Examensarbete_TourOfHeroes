import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [				
    AppComponent,
    DashboardComponent,
      CreateComponent,
      HeroesComponent,
      DeleteComponent,
      EditComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule, // imports the app-router.module.ts
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,


  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
