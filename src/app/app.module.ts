import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
  import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { TdfLoginComponent } from './tdf-login/tdf-login.component';
import { MdfLoginComponent } from './mdf-login/mdf-login.component';
import { LoginService } from './login.service';
import { FakeComponent } from './fake/fake.component';
import { HttpClientModule } from '@angular/common/http';
import { FakeService } from './fake.service';
import { CustomPipePipe } from './custom-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    DataBindingComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    AngularFormsComponent,
    TemplateReferenceComponent,
    TdfLoginComponent,
    MdfLoginComponent,
    FakeComponent,
    CustomPipePipe
  ],
  imports: [
      BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [LoginService], // register service class details
  bootstrap: [AppComponent]
})
export class AppModule { }