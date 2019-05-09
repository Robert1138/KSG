import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { account } from '../account';
import * as FileSaver from 'file-saver'; 


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    pdfSrc: string = '/assets/upload1.pdf';
    displayAccount: account[];
fileStr: string;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    
   //this.getPDF(1);

  }

  getAccount(id: number): void {

    this.accountService.getAccountById(id)
                            .subscribe(displayAccounts => this.displayAccount = displayAccounts);
    }
  
    getPDF(id: number): void {
      this.getAccount(id);
      var b1 = new Blob();
      var pdfFile = this.blobToFile(b1, 'pdf1.txt');
      this.fileStr = pdfFile.name;

      let filename = 'mypdf.pdf';
      //FileSaver.saveAs(blob, this.fileStr);

      console.log(this.fileStr);
      //this.pdfSrc = this.displayAccount[0].Form_TG;
      
    }

    public blobToFile = (theBlob: Blob, fileName:string): File => {
      var b: any = theBlob;
      //A Blob() is almost a File() - it's just missing the two properties below which we will add
      b.lastModifiedDate = new Date();
      b.name = fileName;
  
      //Cast to a File() type
      return <File>theBlob;
  }


}
