import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapping-editor',
  templateUrl: './mapping-editor.component.html',
  styleUrls: ['./mapping-editor.component.css']
})
export class MappingEditorComponent implements OnInit {
  editorOptions = { theme: 'vs-dark', language: 'javascript' };
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';

  constructor() { }

  ngOnInit() {
  }

}
