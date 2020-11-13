import { Component, OnInit } from '@angular/core';
import { ReadService } from '../../services/read/read.service';
import { HttpResponse } from '../../interfaces/http.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public products;
  public inFocus;
  public newValue: string;

  constructor(private readService: ReadService) { }

  ngOnInit(): void {
    this.readProducts();
  }


  readProducts() {
    this.readService.readProducts()
    .subscribe((response: HttpResponse) => {
      console.log(response)

      if(response.success) {
        this.inFocus = response.data[0];
        this.products = response.data;
      }
    });
  }

  setInfocus(product) { this.inFocus = product; }

  addValue(obj) {
    obj.value.push(obj.temp);
    obj.temp = undefined;
    return;
  }

  addFeature() { return this.inFocus.features.push({ key: "Some Feature", value: [ "Value One", "Value Two" ]})}

  submit() {
    console.log(this.inFocus);
  }
}
