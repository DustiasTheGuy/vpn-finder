export class HttpConfig {
  private prodAddr: string = "https://vpnfind.site";
  private devAddr: string = "http://localhost:3000";
  private prod: boolean = false;

  constructor() {}

  public getAddr(): string { return this.prod ? this.prodAddr : this.devAddr }
}