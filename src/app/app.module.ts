import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DirectivesComponent } from './directives/directives.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserLoginComponent } from './user-login/user-login.component'; 
import { MatTabsModule } from '@angular/material/tabs';
import { TestPipe } from './test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    DirectivesComponent,
    UserLoginComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
