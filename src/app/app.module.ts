import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MonacoEditorModule } from 'ngx-monaco-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogicalModelsComponent } from './logical-models/logical-models.component';
import { InputDataComponent } from './input-data/input-data.component';
import { OutputDataComponent } from './output-data/output-data.component';
import { MappingEditorComponent } from './mapping-editor/mapping-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    LogicalModelsComponent,
    InputDataComponent,
    OutputDataComponent,
    MappingEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MonacoEditorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
