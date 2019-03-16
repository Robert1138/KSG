import { Component, OnInit } from '@angular/core';
import * as  jspdf from 'jspdf';
import { stringify } from '@angular/core/src/util';
import { text } from '@angular/core/src/render3';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  
  test: string;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstCtrl2: ['', Validators.required]

    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      secondCtrl2: ['', Validators.required],

    });



  }


showOutput(): void {
console.log(this.firstFormGroup.get('firstCtrl').value);
console.log(this.secondFormGroup.get('secondCtrl').value);
}





createPDF(): void {
console.log("got here ");
let childNameMale: string;
let childNameFemale: string;
let guardianNameMale: string;
let guardianNameFemale: string;
let address: string;  
childNameMale = this.firstFormGroup.get('firstCtrl').value
childNameFemale = this.firstFormGroup.get('firstCtrl2').value
guardianNameMale = this.secondFormGroup.get('secondCtrl').value
guardianNameFemale = this.secondFormGroup.get('secondCtrl2').value

var doc = new jspdf();

  let baseText: string;
  let baseText2: string;
  let baseText3: string;
  let baseText4: string;
  let baseText5: string;
  let baseText6: string;

  let tstprint: string;


  baseText = 'I, Awesome Mom, make this Declaration to appoint the guardian for my children, listed as \n' + 
  'follows, in the event of my death or incapacity:\n' + 'Awesome Daughter: ' + childNameFemale + "\n"  + 'Awesome Son: ' + childNameMale + "\n";

  baseText2 = "I designate " + guardianNameFemale + " and " + guardianNameMale + " in-law, to serve jointly as guardians of the person of my children, and if they are not married to one another either by divorce or death, neither shall serve as guardian of the person of my children; Awesome Brother and Cool Sister in-law, to serve jointly and if Cool Sister in-law can't serve as Guardian, Awesome Brother to serve alone; however, if Awesome Brother cannot serve as guardian, Cool Sister in-law shall not serve alone as guardian of the person of my children; and Awesome Cousin as second alternate guardian of the person of my children.";

  baseText3 = "If any guardian or alternate guardian dies, does not qualify, or resigns, the next named alternate guardian becomes guardian of my children.";

  baseText4 = "Signed: May 29, 2018";

  baseText5 = "I, Awesome Mom, sign my name to this instrument consisting of 2 pages on May 29, 2018 and do declare that I sign and execute this instrument as my Declaration of Appointment of Guardian for My Children in the Event of My Death or Incapacity, that I sign it willingly, that I execute it as my free and voluntary act for the purposes therein expressed, and that I am eighteen years of age or older, of sound mind, and under no constraint or undue influence.";

 // console.log(doc.getFontList);
doc.setFontStyle("bold");
doc.setFontSize(18);
doc.setFont("arial");  
doc.text('           Declaration of Appointment of Guardian for My', 20, 20);
doc.text('        My Children in the Event of My Death or Incapacity', 20, 30);

doc.setFontSize(12);
doc.setFont("times");
doc.setFontType('normal');  

doc.text(baseText, 20, 40);
doc.text(baseText2, 20, 60, {maxWidth: 165, align: "justify"});
doc.text(baseText3, 20, 100, {maxWidth: 165, align: "justify"});
doc.text(baseText4, 20, 110, {maxWidth: 165, align: "justify"});
doc.text(baseText5, 20, 120, {maxWidth: 165, align: "justify"});





// var blob = doc.output('blob');

// var dispFile = this.blobToFile(blob, "test2.pdf");

// sessionStorage.setItem("key1", JSON.stringify(dispFile));



//saveAs(blob,"test1PDF.pdf");




doc.save('a4.pdf');

}


blobToFile(newBlob: Blob, fileName: string): File {

  var newB: any;
  newB = newBlob;

  newB.lastModifiedDate = new Date();
  newB.name = fileName;

   return <File>newB;

}


/*  temporarily leaving this here
<button mat-raised-button (click)="isLinear = !isLinear" id="toggle-linear">
    {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}
  </button>




  
<div class = "default-theme">
<mat-vertical-stepper>

    <ng-template matStepperIcon="edit" >
        <mat-icon >check</mat-icon>
      </ng-template>

      
  <mat-step label="Step 1">
    Content 1
  </mat-step>
  <mat-step label="Step 1">
    Content 2
  </mat-step>
</mat-vertical-stepper>
</div>
*/

}
