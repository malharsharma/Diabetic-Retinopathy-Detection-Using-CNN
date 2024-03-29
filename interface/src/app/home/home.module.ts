import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';
// import {FileUploadComponent} from '../Components/file-upload/file-upload.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, HeaderComponent, FooterComponent]
  // declarations: [HomePage, HeaderComponent, FooterComponent, FileUploadComponent]

})
export class HomePageModule {}
