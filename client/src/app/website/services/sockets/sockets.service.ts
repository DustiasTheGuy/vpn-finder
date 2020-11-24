import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})

export class SocketsService {

  constructor(private socket: Socket) {}

  public connect(data) {
    this.socket.emit("new-connection", data)
  }
}
