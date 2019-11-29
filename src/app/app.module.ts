import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogicalModelsComponent } from './logical-models/logical-models.component';
import { MappingEditorComponent } from './mapping-editor/mapping-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    LogicalModelsComponent,
    MappingEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
