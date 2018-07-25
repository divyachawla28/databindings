import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'test',content:'This is just a test!'}];

  onServeradded(serverData:{serverName: string, serverContent: string}) {
  	this.serverElements.push({
  		type:'server',
  		name: serverData.serverName,
  		content:serverData.serverContent
  	});
  }

  onblueprintadded(serverData:{serverName: string, serverContent: string}) {
  	this.serverElements.push({
  		type:'blueprint',
  		name: serverData.serverName,
  		content:serverData.serverContent
  	});
  }
  buttonClick() {
    console.log("button click!");
  }
  changeFirst() {
    this.serverElements[0].name = 'Just changed!'
  }
}
