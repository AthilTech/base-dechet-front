import { Component, OnInit } from '@angular/core';
import { TypeSubsidiaryService } from 'src/app/core/services/type-subsidiary.service';

@Component({
  selector: 'app-detail-sub-types-subsidiary',
  templateUrl: './detail-sub-types-subsidiary.component.html',
  styles: [
  ]
})
export class DetailSubTypesSubsidiaryComponent implements OnInit {

  constructor(public typeSubsidiaryService: TypeSubsidiaryService) { }

  ngOnInit(): void {
  }

}
