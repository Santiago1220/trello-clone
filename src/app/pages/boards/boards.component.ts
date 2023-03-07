import { Component, OnInit } from '@angular/core';
import { faWaveSquare, faBox, faClock, faGear, faUsers, faBorderAll, faHeart, faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import { faTrello} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent implements OnInit {
  faWaveSquare = faWaveSquare;
  faBox = faBox;
  faClock = faClock;
  faTrello = faTrello;
  faGear = faGear;
  faUsers = faUsers;
  faBorderAll = faBorderAll;
  faHeart = faHeart;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;

  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Sub Item 1.1'
        },
        {
          label: 'Sub Item 1.2'
        },
      ]
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Sub Item 2.1'
        }
      ]
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Sub Item 3.1'
        },
        {
          label: 'Sub Item 3.2'
        },
        {
          label: 'Sub Item 3.3'
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
