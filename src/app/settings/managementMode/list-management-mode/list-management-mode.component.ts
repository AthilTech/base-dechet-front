import { Component, OnInit } from '@angular/core';
import { ModeGestion } from 'src/app/core/models/mode-gestion.model';
import { ModeGestionService } from 'src/app/core/services/mode-gestion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-management-mode',
  templateUrl: './list-management-mode.component.html',
  styleUrls: ['./list-management-mode.component.css']
})
export class ListManagementModeComponent implements OnInit {

  constructor(public modeGestionService:ModeGestionService) { }

  ngOnInit(){
    
    this.modeGestionService.getListModeGestion().subscribe(
      res => {
        this.modeGestionService.ListModeGestion = res as ModeGestion[];
      },
      err => {
        console.log(err);
      }
    );
  }
  onAddModeGestionModal(){
    this.modeGestionService.resetModeGestionForm();
    this.modeGestionService.getListModeGestion();
    this.modeGestionService.formModeGestion.enable();
  }

  onUpdateModeGestion(item:ModeGestion){
    this.populateModeGestionForm(item);
    this.modeGestionService.formModeGestion.enable();
  
}

populateModeGestionForm(modeGestion:ModeGestion){
  this.modeGestionService.formModeGestion.reset({
    managementModeId:modeGestion.managementModeId,
    managementModeLabel:modeGestion.managementModeLabel,
    
  });
  }
  
  onDeleteModeGestion(managementMode){
 
          Swal.fire({
            title: 'Etes-vous sûr de vouloir supprimer cette ligne?',
            text: 'Vous ne pourrez pas récupérer cet enregistrement!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'oui, supprimer!',
            cancelButtonText: 'Non, laisser'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Supprimé!',
                'Enregistrement supprimé.',
                'success'
              )
             
          
              this.modeGestionService.deleteModeGestion(managementMode).subscribe(
         
                res =>{       
                  this.modeGestionService.deleteManagementModeNature(managementMode).subscribe(res=>
                    
                    console.log(res));
                  console.log(res);
                  this.modeGestionService.getListModeGestion().subscribe(
                    res=>{
                      console.log(res);
                      this.modeGestionService.ListModeGestion=res as ModeGestion[]
                      //this.toastr.error('Elément supprimé avec succée!') 
                    }
                  );
                })
         
        
            }
          })
        }
        resetForm = () => {
          while (this.modeGestionService. managemantMode_NatureFormArray.length !== 0) {
            this.modeGestionService. managemantMode_NatureFormArray.removeAt(0)
          }
          //this.managemantMode_NatureFormArray.get('fk_natureId').setValue('00000000-0000-0000-0000-000000000000')
        }
  }
