import { MatDialog } from '@angular/material/dialog';
import { ViewportScroller } from '@angular/common';
import { Component, DoCheck, OnInit, EventEmitter, Output } from '@angular/core';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  mobile = false;
  @Output() onClick = new EventEmitter<any>();
  constructor(private viewportscroller: ViewportScroller, public dialog: MatDialog) { }
  openDialog() {
    console.log();
    const dialogRef = this.dialog.open(DialogComponentComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
    if (window.screen.width <= 968) {
      // 768px portrait
      this.mobile = true;
    }
  }

  ngDoCheck() {
    if (window.screen.width <= 968) {
//resizeable
      this.mobile = true;
    }
  }
  onClickScroll(elementId: string):void {
    this.viewportscroller.scrollToAnchor(elementId);
     }
     
}
