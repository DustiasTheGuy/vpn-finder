export class HttpConfig {
    private prodAddr: string = "https://vpnfind.site/forum";
    private devAddr: string = "http://localhost:3000/forum";
    private prod: boolean = false;
  
    constructor() {}
  
    public getAddr(): string { return this.prod ? this.prodAddr : this.devAddr }
    public getEnv(): boolean { return this.prod }
}
  