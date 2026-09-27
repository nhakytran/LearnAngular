import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-style-component',
  standalone: false,
  styleUrl: './binding-style-component.css',
  templateUrl: './binding-style-component.html',
})
export class BindingStyleComponent {

  progressValue: number = 60;

  getProgressColor(): string {

    if (this.progressValue <= 10) {
      return '#FF0000'; // 0-10: đỏ
    } 
    else if (this.progressValue <= 20) {
      return '#FF3300'; // 10-20
    } 
    else if (this.progressValue <= 30) {
      return '#FF6600'; // 20-30
    } 
    else if (this.progressValue <= 40) {
      return '#FF9900'; // 30-40
    } 
    else if (this.progressValue <= 50) {
      return '#FFCC00'; // 40-50
    } 
    else if (this.progressValue <= 60) {
      return 'yellow'; // 50-60: vàng
    } 
    else if (this.progressValue <= 70) {
      return '#CCFF00'; // 60-70
    } 
    else if (this.progressValue <= 80) {
      return '#99FF00'; // 70-80
    } 
    else if (this.progressValue <= 90) {
      return '#66FF00'; // 80-90
    } 
    else {
      return 'green'; // 90-100: xanh
    }
  }

  getStatus(): string {

    if (this.progressValue <= 10) {
      return 'Critical';
    } 
    else if (this.progressValue <= 20) {
      return 'Danger';
    } 
    else if (this.progressValue <= 30) {
      return 'Very Low';
    } 
    else if (this.progressValue <= 40) {
      return 'Low';
    } 
    else if (this.progressValue <= 50) {
      return 'Below Normal';
    } 
    else if (this.progressValue <= 60) {
      return 'Normal';
    } 
    else if (this.progressValue <= 70) {
      return 'Good';
    } 
    else if (this.progressValue <= 80) {
      return 'Stable';
    } 
    else if (this.progressValue <= 90) {
      return 'Very Good';
    } 
    else {
      return 'Running';
    }
  }
}