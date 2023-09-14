import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AsideComponent, HeaderComponent],
  imports: [CommonModule, SharedModule, FormsModule, RouterModule],
  exports: [AsideComponent, HeaderComponent],
})
export class CoreModule {}
