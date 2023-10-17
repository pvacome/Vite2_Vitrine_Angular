import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  imagUrl!: string;


  ngOnInit() {
    this.imagUrl = "../../../assets/homme-grand-angle-travaillant-ordinateur-portable.jpg"


  }
}
