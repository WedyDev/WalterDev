import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { IndexaComponent } from './component/indexa/indexa.component';
import { ToolbarMostrarComponent } from './component/toolbar/toolbar-mostrar/toolbar-mostrar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    IndexaComponent,
    ToolbarMostrarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
