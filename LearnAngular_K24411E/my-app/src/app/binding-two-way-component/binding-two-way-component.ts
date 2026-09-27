import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-two-way-component',
  standalone: false,
  styleUrl: './binding-two-way-component.css',
  templateUrl: './binding-two-way-component.html',
})
export class BindingTwoWayComponent {

  hsa: number = 0;
  hsb: number = 0;
  hsc: number = 0;

  result: string = "";

  giaiPtb2() {

    // Trường hợp a = 0
    if (this.hsa == 0) {

      // bx + c = 0
      if (this.hsb == 0 && this.hsc == 0) {
        this.result = "INFINITYYYYYY";
      }

      // c = 0? Actually 0x + c = 0
      else if (this.hsb == 0 && this.hsc != 0) {
        this.result = "NO SOLUTION";
      }

      // bx + c = 0
      else {
        this.result = "x = " + (-this.hsc / this.hsb);
      }

    }

    // Trường hợp a != 0
    else {

      let delta = Math.pow(this.hsb, 2) - 4 * this.hsa * this.hsc;

      // Delta < 0
      if (delta < 0) {
        this.result = "<font color='red'>NO SOLUTION</font>";
      }

      // Delta = 0
      else if (delta == 0) {
        let x = -this.hsb / (2 * this.hsa);
        this.result = "x1 = x2 = " + x;
      }

      // Delta > 0
      else {

        let x1 = (-this.hsb - Math.sqrt(delta)) / (2 * this.hsa);
        let x2 = (-this.hsb + Math.sqrt(delta)) / (2 * this.hsa);

        this.result =
          "<font color='red'>X1 = " + x1 +
          "</font><br/>" +
          "<font color='purple'>X2 = " + x2 + "</font>";
      }
    }
  }
}