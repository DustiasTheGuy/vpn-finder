import { Component, OnInit } from '@angular/core';
import { ReadService } from '../../services/read/read.service';
import { UpdateService } from '../../services/update/update.service';
import { CreateService } from '../../services/create/create.service';
import { DeleteService } from '../../services/delete/delete.service';
import { HttpResponse } from '../../interfaces/http.interface';
import { Product } from '../../interfaces/product';
import * as CanvasJS from '../../../assets/canvasjs.min';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  public products: Array<Product>;
  public inFocus: Product;
  public newFeature: string;

  public error: boolean = false;
  public success: boolean = false;
  public message: string;
  public index: number = 0;
  public dataPoints: Array<any> = [];
  public chart: any;

  constructor(
    private socket: Socket,
    private deleteService: DeleteService,
    private createService: CreateService,
    private updateService: UpdateService,
    private readService: ReadService) {}

  ngOnInit(): void {
    this.readProducts(() => this.inFocus = this.products[this.index]);
    this.createChart();

    this.socket.emit("get-connections", {});

    this.socket.on('connections', (data) => {
      console.log(data)
      this.dataPoints.push({
        y: data
      })
      this.chart.render();
    });
  }

  readProducts(callback: Function) {  
    this.readService.readProducts()
    .subscribe((response: HttpResponse) => {
      if(response.success) {
        response.data.forEach(element => element["new"] = false);
        this.products = response.data;
        callback();
      }
    });
  }

  refresh() {
    this.readProducts(() => {
      console.log("Refresh")
    })
  }

  closeMessage() {
    this.message = undefined;
    this.error = false;
    this.success = false;
  }

  setMessage(error: boolean, message: string) {
    this.message = message;
    if(error) {
      this.error = true;
      this.success = false;
    } else if(!error) {
      this.error = false;
      this.success = true;
    };

    setTimeout(() => {
      this.message = undefined;
      this.error = false;
      this.success = false;
    }, 5000);
  }

  setInfocus(product, index) { 
    this.inFocus = product;
    this.index = index; 
  }

  addValue(obj) {
    obj.value.push(obj.temp);
    obj.temp = undefined;
    return;
  }

  newProduct() {
    let product = {
      imageURL: "/assets/images/products/placeholder.png",
      label: "Best VPN Provider",
      description: "A little description",
      link: `https://moneymaking.net`,
      freeOption: false,
      priority: false,
      new: true,
      active: true,
      moneyBack: false,
      onSaleData: { onSale: false, discount: 0 },
      features: []
    };

    this.products.push(product);
    this.inFocus = this.products[this.index];
  }

  addFeature(str: string) {
    if(str.length === 0) return;

    this.inFocus.features.push(str);
    this.newFeature = undefined;
  }

  update() { 
    this.updateService.updateProduct(this.inFocus)
    .subscribe((response: HttpResponse) => {
      if(response.success) this.readProducts(() => this.setMessage(false, response.message));
      if(!response.success) this.setMessage(true, response.message);
    });
  }

  create() {
    this.createService.createDocument(this.inFocus)
    .subscribe((response: HttpResponse) => {
      if(response.success) this.readProducts(() => this.setMessage(false, response.message));
      if(!response.success) this.setMessage(true, response.message);
    });
  }

  delete(product) {
    if(!confirm("Are you sure you wish to delete this product? This action CANNOT be undone.")) return;

    if(product.new) {
      let index = this.products.findIndex((element) => element.link === product.link);
      this.products.splice(index, 1);
      return;
    }
    
    // Delete the product
    this.deleteService.deleteOne(product._id)
    .subscribe((response: HttpResponse) => {
      if(response.success) this.readProducts(() => this.setMessage(false, response.message));
      if(!response.success) this.setMessage(true, response.message);
    });
  }


  createChart() {
    this.chart = new CanvasJS.Chart("chartContainer", {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: { text: "Online Users" },
      data: [
      {
        type: "line",                
        dataPoints: this.dataPoints
      }]
    });
    
    this.chart.render();
  }
}


/*
    Expected data when creating a new document

    {
        features: Array<string>,  
        description: String,
        imageURL: String,
        link: String,
        label: String,
        freeOption: Boolean,
        moneyBack: Boolean,
        onSaleData: {
            onSale: Boolean,
            discount: Number
        }
    }
*/