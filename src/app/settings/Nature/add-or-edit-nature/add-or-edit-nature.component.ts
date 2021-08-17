import { Component, OnInit } from '@angular/core';
import { Nature } from 'src/app/core/models/nature.model';
import { NatureService } from 'src/app/core/services/nature.service';

@Component({
  selector: 'app-add-or-edit-nature',
  templateUrl: './add-or-edit-nature.component.html',
  styleUrls: ['./add-or-edit-nature.component.css']
})
export class AddOrEditNatureComponent implements OnInit {

  constructor(public natureService: NatureService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.natureService.formNature.controls.isActive.setValue(true)
    if (this.natureService.formNature.controls.natureId.value == '00000000-0000-0000-0000-000000000000') {
      this.natureService.postNature().subscribe(
        res => {
          this.natureService.resetNatureForm();
          this.natureService.getListNature().subscribe(
            res => {
              console.log(res);
              this.natureService.ListNature = res as Nature[]
            }
          );
        }
      );
    }
    else {

      this.natureService.updateNature().subscribe(
        res => {
          this.natureService.formNature.disable()
          this.natureService.getListNature().subscribe(
            res => {
              console.log(res);
              this.natureService.ListNature = res as Nature[]
            }
          );
        }
      )

    }
    this.natureService.getListNature().subscribe(
      res => {
        console.log(res);
        this.natureService.ListNature = res as Nature[]
      }
    );

  }

}