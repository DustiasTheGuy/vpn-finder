export class HttpConfig {
  private prodAddr: string = "https://vpnfind.site";
  private devAddr: string = "http://localhost:3000";
  private prod: boolean = true;

  constructor() {}

  public getAddr(): string { return this.prod ? this.prodAddr : this.devAddr }
  public getEnv(): string  { return this.prod ? "Production" : "Development" }
}