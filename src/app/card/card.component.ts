import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataCard } from './card-data.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() 
  dataCard! : DataCard;

  @Output() 
  likeClicked = new EventEmitter<number>();

  ngOnInit(): void {
  }

  countLike() {
    this.likeClicked.emit(this.dataCard.TotalLike++);
  }

}
