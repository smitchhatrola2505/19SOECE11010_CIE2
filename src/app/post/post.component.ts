import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  myData :any = [];
  p:any;
  constructor(private user: DataService) { }

  ngOnInit(): void {
    this.user.getData().subscribe(data => {
      this.myData = data;
    })
  }
  delete(m:any){
    this.user.Deleted(m.id).subscribe(response=>{
      this.myData=this.myData.filter((item:any)=>item.id !== m.id);
    });
  }

}
