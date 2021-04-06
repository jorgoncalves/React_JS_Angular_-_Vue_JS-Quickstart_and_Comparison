import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hobbies = ["Gym", "Studing", "Reading", "Gaming"];
  newHobby = "";
  hobbyDeleted = false;

  onAddHobby (){
    this.hobbies.push(this.newHobby);
  }

  onRemoveHobby (hobby: string) {
    const hobbyIndex = this.hobbies.indexOf(hobby);
    this.hobbies.splice(hobbyIndex,1);
    this.hobbyDeleted = true;
  }

}
