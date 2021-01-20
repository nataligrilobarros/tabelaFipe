import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuComponent, RodapeComponent, BodyComponent],
  imports: [
    CommonModule,
    FormsModule,
    LayoutRoutingModule
  ],
  exports:[MenuComponent, RodapeComponent, BodyComponent]
})
export class LayoutModule { }
