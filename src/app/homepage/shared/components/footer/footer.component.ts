import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from './../dialog-component/dialog-component.component';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Output() onClick = new EventEmitter<any>();
  constructor(private viewportscroller: ViewportScroller, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    console.log();
    const dialogRef = this.dialog.open(DialogComponentComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onClickScroll(elementId: string):void {
    this.viewportscroller.scrollToAnchor(elementId);
     }
}
