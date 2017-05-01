import { BrowserModule } from "@angular/platform-browser";
import { Injector, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { rootReducer } from "./store";
import { combineReducers, StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { compose } from "@ngrx/core";
import { logger } from "./logger";
import { reset } from "./reset";

export class AnalyticsService {
  visit( page : string ) {
    // Report the event to your analytics provider
    console.log(`Visiting page - ${page}`);
  }

  leave( page : string ) {
    // Report the event to your analytics provider
    console.log(`Leaving page - ${page}`);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore(compose(reset, logger, combineReducers)(rootReducer)),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [AnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  static injector : Injector;

  constructor( injector : Injector ) {
    AppModule.injector = injector;
  }

}
