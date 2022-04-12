import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Group } from 'src/app/classes/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  group:Group= new Group();

  //for the validation
  createGroup= new FormGroup({
    leve: new FormControl('',[Validators.required,Validators.maxLength(1)]),
    namG: new FormControl('',[Validators.required,Validators.maxLength(1)]),
  })

  constructor(private router:Router,
    private groupService:GroupService) { }

  ngOnInit(): void {
  }

  //for the validation to get the values from all fields 
  get leve(){return this.createGroup.get('leve')}
  get namG(){return this.createGroup.get('namG')};
  
  saveGroup(){
    this.groupService.createGroup(this.group).subscribe( data =>{
      console.log(data);
      this.goToGroupList();
    },
    error => console.log(error));
  }

  goToGroupList(){
    this.router.navigate(['/manage-group']);
  }
  
  onSubmit(){
    console.log(this.group);
    this.saveGroup();
  }


}
