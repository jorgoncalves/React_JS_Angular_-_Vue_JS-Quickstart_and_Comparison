import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-hobby",
  template: `
    <li>{{ hobby }}</li>
  `
})
export class HobbiesComponent {
  @Input() hobby: string;
  @Output() userClicked = new EventEmitter<string>();

  onUsernameClicked(){
    console.log(this.hobby);
    
  }
}