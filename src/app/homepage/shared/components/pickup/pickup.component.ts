import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.scss']
})
export class PickupComponent implements OnInit {
  @Output() onClick = new EventEmitter<any>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    console.log();
    const dialogRef = this.dialog.open(DialogComponentComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
