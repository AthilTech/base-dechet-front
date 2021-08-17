import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { element } from 'protractor';
import { ConditionementType } from 'src/app/core/models/conditionement-type';
import { Conditionnement } from 'src/app/core/models/conditionnement.model';
import { ConditionementTypeService } from 'src/app/core/services/conditionement-type.service';
import { ConditionnementService } from 'src/app/core/services/conditionnement.service';

@Component({
  selector: 'app-add-or-edit-conditionnement',
  templateUrl: './add-or-edit-conditionnement.component.html',
  styleUrls: ['./add-or-edit-conditionnement.component.css']
})
export class AddOrEditConditionnementComponent implements OnInit {
  
  items: FormArray;
  test: boolean = false;
  constructor(public conditionnementService: ConditionnementService, public conditionementTypeService: ConditionementTypeService, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.conditionnementService.orderForm = new FormGroup({
      items: new FormArray([])
    });

    this.test = false;
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      value: '',
      conditioningTypeId: '00000000-0000-0000-0000-000000000000',
      isActive: true,
    });
  }

  addItem(): void {
    this.items = this.conditionnementService.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
    this.test = true
  }

  reinitialiser() {
    (this.conditionnementService.orderForm.get('items') as FormArray).removeAt(0)
  }
  get getform() {
    return (this.conditionnementService.orderForm.get('items') as FormArray).controls
  }

  removeConditionnement(i){
      (this.conditionnementService.orderForm.get('items') as FormArray).removeAt(i)
  }

  onSubmit() {
    //console.log(this.orderForm.get('items') as FormArray);
    if (this.conditionnementService.formConditionnement.value.conditioningId == '00000000-0000-0000-0000-000000000000') {
      console.log(this.test);
      
      if( (this.conditionnementService.orderForm.get('items') as FormArray).length != 0){

        (this.conditionnementService.orderForm.get('items') as FormArray).value.forEach(element => {
//debugger
          this.conditionementTypeService.postConditionementType(element).subscribe(res => {
            if (res as ConditionementType) {

              this.conditionnementService.formConditionnement.controls.fkConditioningType.setValue((res as ConditionementType).conditioningTypeId);
              this.conditionnementService.postConditionnement().subscribe(res => {
                for (let i = (this.conditionnementService.orderForm.get('items') as FormArray).controls.length - 1; i >= 0; i--) {
                  (this.conditionnementService.orderForm.get('items') as FormArray).removeAt(i)
                }
                this.conditionnementService.resetConditionnement();
                this.conditionnementService.getListConditionnement().subscribe(
                  res => {
                    console.log(res);
                    this.conditionnementService.ListConditionnement = res as Conditionnement[]
                  }
                );
              })
            }     
          })
        });

        while ((this.conditionnementService.orderForm.get('items') as FormArray).length !== 0) { (this.conditionnementService.orderForm.get('items') as FormArray).removeAt(0) }
      }
      else {
      //  debugger
        this.conditionnementService.formConditionnement.controls.fkConditioningType.setValue(null);
        this.conditionnementService.postConditionnement().subscribe(res => {
          this.conditionnementService.resetConditionnement();
          this.conditionnementService.getListConditionnement().subscribe(
            res => {
              console.log(res);
              this.conditionnementService.ListConditionnement = res as Conditionnement[]
            }
          );
        })

      }
    }

    // else {
    //   debugger
    //   this.conditionementTypeService.updateConditionementType().subscribe(res => {
    //     this.conditionnementService.updateConditionnement().subscribe(
    //       res => {

    //         this.conditionnementService.getListConditionnement().subscribe(
    //           res => {
    //             console.log(res);
    //             this.conditionnementService.ListConditionnement = res as Conditionnement[]

    //           }
    //         );
    //       });
    //   })
    // }

  }


}
