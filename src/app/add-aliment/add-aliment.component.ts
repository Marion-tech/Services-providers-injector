import { Component } from '@angular/core';
import { AlimentService } from '../aliment.service';

@Component({
  selector: 'app-add-aliment',
  templateUrl: './add-aliment.component.html',
  styleUrls: ['./add-aliment.component.scss'],
})
export class AddAlimentComponent {
  public aliment: string = 'Aliment';
  constructor(private alimentService: AlimentService) {}

  public addAliment() {
    this.alimentService.addOne(this.aliment);
    this.aliment = '';
  }
}
