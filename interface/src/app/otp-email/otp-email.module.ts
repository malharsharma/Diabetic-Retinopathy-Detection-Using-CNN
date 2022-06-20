import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpEmailPageRoutingModule } from './otp-email-routing.module';

import { OtpEmailPage } from './otp-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpEmailPageRoutingModule
  ],
  declarations: [OtpEmailPage]
})
export class OtpEmailPageModule {}
