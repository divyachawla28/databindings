import { Component, OnInit, EventEmitter,Output,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>()
	// newServerName = '';
	@ViewChild('newServerContent') contentServer : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(newServerName) {
    this.serverCreated.emit({
      serverName: newServerName.value,
      serverContent: this.contentServer.nativeElement.value
    });
  }

  onAddBluePrint(newServerName) {
    console.log("blueprint function");

    this.blueprintCreated.emit({
      serverName:newServerName.value,
      serverContent: this.contentServer.nativeElement.value
    });
  }

}
