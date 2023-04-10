import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { ReportsService } from '../reports.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  reportform:FormGroup=new FormGroup({});
  constructor(private fb:FormBuilder,
              private route:Router
                // private reportsService:ReportsService
              ) { }

  ngOnInit(): void {
    // this.reportsService.getReports().then((reports) => {
    //   this.reports = reports;
    // });
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
}
