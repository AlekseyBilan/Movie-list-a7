import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  private serverId: number = 12345;
  private serverStatus: string = 'Offline';
  public serverName: string = '';
  public allowNewServer: boolean = true;
  public serverCreated: boolean = false;
  public statusText: string = 'Server was not created';
  servers: Array<string> = ['TestServer 1', 'TestServer 2'];

  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = false;
    }, 2000)
  }

  ngOnInit() {
  }

  getServerId () {
    return this.serverId;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.statusText = 'Server created!, Name is '+ this.serverName;
  }

  changeServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
