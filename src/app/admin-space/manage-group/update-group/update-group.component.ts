import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Group } from 'src/app/classes/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.scss']
})
export class UpdateGroupComponent implements OnInit {

  id!:number;
  group:Group = new Group();

  //for the validation
  createGroup= new FormGroup({
    leve: new FormControl('',[Validators.required,Validators.maxLength(1)]),
    namG: new FormControl('',[Validators.required,Validators.maxLength(1)]),
  })

  constructor(private router:Router,
    private route:ActivatedRoute,
    private groupService:GroupService) { }

  ngOnInit(): void {

    //to fill the form with the student data by the getGroupById
    this.id=this.route.snapshot.params['id'];
    this.groupService.getGroupById(this.id).subscribe(data =>{
      this.group=data;
    },
    error=> console.log(error));
  }

  //for the validation to get the values from all fields 
  get leve(){return this.createGroup.get('leve')}
  get namG(){return this.createGroup.get('namG')};

  onSubmit(){
    this.groupService.updateGroup(this.id,this.group).subscribe(data =>{ 
      this.goToGroupList();
    },
    error => console.log(error));
    
  }
  
  goToGroupList(){
    this.router.navigate(['/manage-group']);
  }

}
