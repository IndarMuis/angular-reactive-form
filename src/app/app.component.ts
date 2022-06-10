import { Component } from '@angular/core';  
import { DataCard } from './card/card-data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_meterial_card_3';

  listPerson: DataCard[] = [
    {
      Index: 0,
      ImagePath: "https://picsum.photos/200?random=0",
      Age: 37,
      Name: "Flora Nieves",
      Company: "STUCCO",
      Phone: "+62 (938) 581-2473",
      Address: "739 Dewey Place, Deputy, Ohio, 2479",
      TotalLike: 0
    },
    
  ];

  countLikeHandler(event: any) {
    console.log((event.target as HTMLInputElement).value)
  }

  index = this.listPerson.length + 1

  newDataHandler(dataEvent: any){
    // console.log(dataEvent['age']);
    console.log(dataEvent);
    this.listPerson.push({
      Index: this.index,
      ImagePath: "https://picsum.photos/200?random=" + this.index,
      Age: dataEvent['age'],
      Name: dataEvent['name'],
      Company: dataEvent['company'],
      Phone: dataEvent['phone'],
      Address: dataEvent['address'],
      TotalLike: 0
    })
    alert("Data berhasil ditambahkan");
  }


}
