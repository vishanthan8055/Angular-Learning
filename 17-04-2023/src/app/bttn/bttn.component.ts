import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FrmComponent } from '../frm/frm.component';

@Component({
  selector: 'app-bttn',
  templateUrl: './bttn.component.html',
  styleUrls: ['./bttn.component.css']
})
export class BttnComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(FrmComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
