import { Component,
 OnInit,
 Input,
 OnChanges,
 SimpleChanges,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 ContentChild,
 ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked{

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { }

  ngOnInit() {
  	console.log('cotent value' + this.paragraph.nativeElement.textContent);
  }
  ngOnChanges(changes: SimpleChanges) {
  	console.log(changes,"changes");
  	console.log("Got a value in Input");
  }
  ngDoCheck() {
  	console.log("ngDoCheck executes!")
  }

  ngAfterContentInit() {
  	console.log('AfterContentInit executes!');
  	console.log('cotent value' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked() {
  	console.log('AfterContentChecked executes!');
  }
  ngAfterViewInit() {
  	console.log('AfterViewInit executes!');
  }
  ngAfterViewChecked() {
  	console.log('AfterViewChecked executes!');
  }

}
