export class HttpConfig {
  private prodAddr: string = "https://vpnfind.site/website";
  private devAddr: string = "http://localhost:3000/website";
  private prod: boolean = false;

  constructor() {}

  public getAddr(): string { return this.prod ? this.prodAddr : this.devAddr }
  public getEnv(): boolean { return this.prod }
}
