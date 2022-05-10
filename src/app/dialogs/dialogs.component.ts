import { Component, OnInit , Inject} from '@angular/core';
import { Todo } from '../classes/todo';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {
  todo: Todo = new Todo();
  constructor(public dialogRef: MatDialogRef<DialogsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  onSaveClick(): void {
    this.dialogRef.close(this.todo);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
