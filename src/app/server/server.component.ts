import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  @Input() serverName: string;
  public serverStatus: string = 'Offline';
  // public serverName: string = '';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Offline' : 'Online';
    console.log('serverName = ', this.serverName);
  }

  ngOnInit() {
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}