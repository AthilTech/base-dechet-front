import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TypeService } from 'src/app/core/services/type.service';

@Component({
  selector: 'app-detail-type',
  templateUrl: './detail-type.component.html',
  styleUrls: ['./detail-type.component.css']
})
export class DetailTypeComponent implements OnInit {
  bsModalRef: BsModalRef;
  term : string;
  p: number=1;
  constructor(public typeService: TypeService, private modalService: BsModalService) { }

  ngOnInit(): void {
  }

}
