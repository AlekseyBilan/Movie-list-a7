import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
//   styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  private serverId: number = 12345;
  public serverName: string = '123s';
  public allowNewServer: boolean = false;
  public statusText: string = 'Server was not created';

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  getServerId () {
    return this.serverId;
  }

  onCreateServer() {
    this.allowNewServer = !this.allowNewServer;
    this.allowNewServer ? this.statusText = 'Server created' : 'Server was not created';
  }

}
