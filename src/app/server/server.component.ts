import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
//   styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  private serverId: number = 12345;
  private serverStatus: string = 'Offline';
  public serverName: string = '';
  public allowNewServer: boolean = false;
  public serverCreated: boolean = false;
  public statusText: string = 'Server was not created';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Offline' : 'Online';
  }

  ngOnInit() {
  }

  getServerId () {
    return this.serverId;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.statusText = 'Server created!, Name is '+ this.serverName;
  }

  changeServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.serverCreated ? 'green' : 'red';
  }
}
