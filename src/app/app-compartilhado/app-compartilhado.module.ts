import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MatToolbarModule,
       MatCardModule,
       MatInputModule,
       MatFormFieldModule,
       MatDatepickerModule,
       MatNativeDateModule,
       MatTabsModule,
       MatExpansionModule,
       MatOptionModule,
       MatSelectModule,
       MatCheckboxModule,
       MatStepperModule
       
       
      } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormGroup,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  
  exports:
  [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatExpansionModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    ReactiveFormsModule
    
    

  ]
})
export class AppCompartilhadoModule { }
