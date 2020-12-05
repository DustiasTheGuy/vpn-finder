import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpConfig } from '../http.config';

@Injectable({
  providedIn: 'root'
})

export class CreateService {
  private serverAddr: string;

  constructor(private httpClient: HttpClient) {
    this.serverAddr = new HttpConfig().getAddr();
  }

  createTopic(data) {
    return this.httpClient.post(`${this.serverAddr}/create-topic`, data, {
      headers: { 'Authorization': localStorage.getItem('token') }
    })
  }

  uploadFile(data) {
    return this.httpClient.post(`${this.serverAddr}/upload-file`, data, {
      headers: { 'Authorization': localStorage.getItem('token') }
    })
  }

  uploadFiles(data) {
    return this.httpClient.post(`${this.serverAddr}/upload-files`, data, {
      headers: { 'Authorization': localStorage.getItem('token') }
    })
  }
  
  createReply(data) {
    return this.httpClient.post(`${this.serverAddr}/create-reply`, data, {
      headers: { 'Authorization': localStorage.getItem('token') }
    })
  }

  signUp(data) {
    return this.httpClient.post(`${this.serverAddr}/sign-up`, data);
  }
}
