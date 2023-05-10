import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { ADVOCATE_URL } from '../Constants/constant';
// import { ReportsService } from '../reports.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  reportform:FormGroup=new FormGroup({});
  constructor(private fb:FormBuilder,
              private route:Router,
              private http:HttpService
                
              ) { }

  ngOnInit(): void {
  
    this.reportform=this.fb.group({
      caseNumber:['',[Validators.required]],
      advocateName:['',[Validators.required]],
      nextDate:['',[Validators.required]]
    })
  }
reports=[{case:'case No.',adv:'Advocate Name',nextDate:'Next Date'},
         {case:'case No.',adv:'Advocate Name',nextDate:'Next Date'},
         {case:'case No.',adv:'Advocate Name',nextDate:'Next Date'} 
        ];


showMenu(){
  this.route.navigate(['menu']);
}
  
downloadData(dataType: string) {
  this.http.get(`ADVOCATE_URL/${dataType}`)
    .subscribe(response => {
      const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${dataType}.xlsx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
}
}
