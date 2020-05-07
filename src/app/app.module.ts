import { OperatorsModule } from "./featured/operators/operators.module";
import { CreateObservableModule } from "./featured/create-observable/create-observable.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./core/header/header.component";
import { DashboardComponent } from "./core/dashboard/dashboard.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CreateObservableModule,
    OperatorsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
