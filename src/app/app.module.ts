import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { rootReducer } from "./store";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { PostsEffects } from "./posts-page/posts.effects";
import { EffectsModule } from "@ngrx/effects";

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
    StoreModule.provideStore(rootReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
