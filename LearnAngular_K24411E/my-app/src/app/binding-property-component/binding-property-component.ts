import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component',
  standalone: false,
  styleUrl: './binding-property-component.css',
  templateUrl: './binding-property-component.html',
})
export class BindingPropertyComponent {
  public name: string = 'Trần Nguyễn Nhã Kỳ';
  public email: string = 'trannguyenhaky@gmail.com';
  public nameid: string = 'nameid';
  public emailid: string = 'emailid';
  public isDisabled: boolean = false;
  public hello: string = 'Welconme to K24411E hehehe!!!'
  public red_color: string ='red'
  public advanced_message: string = '<font color="blue">This is advanced message</font>'
}
