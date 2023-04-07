import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  reportform:FormGroup=new FormGroup({});
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.reportform=this.fb.group({
      caseNumber:['',[Validators.required]],
      advocateName:['',[Validators.required]],
      nextDate:['',[Validators.required]]
    })
  }
reports=["report1","report2","report3","report4"];
}
