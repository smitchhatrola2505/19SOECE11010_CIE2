import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.css']
})
export class MakeupComponent implements OnInit {

  p:any;
  makeups =[
    {brand:"maybelline",name:"Maybelline Face Studio M…t Light Booster Bronzer",price:	"14.99",image_link:"../assets/images/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png"},
    {brand:"maybelline",name:"Maybelline Fit Me Bronzer", price:	"10.29",image_link:"../assets/images/d4f7d82b4858c622bb3c1cef07b9d850_ra,w158,h184_pa,w158,h184.png"},
    {brand:"maybelline",name:"Maybelline Facestudio Master Contour Kit",price:	"14.99",image_link:"../assets/images/4621032a92cb428ad640c105b944b39c_ra,w158,h184_pa,w158,h184.png"},
    {brand:"maybelline",name:"Maybelline Face Studio Master Hi-Light Light Booster Blush",price:	"14.99",image_link:"../assets/images/e8c59b78ebeaec5c4b6aeba49a9ff0f6_ra,w158,h184_pa,w158,h184.png"},
    {brand:"maybelline",name:"Maybelline Fit Me Blush",price:	"10.39",image_link:"../assets/images/53d5f825461117c0d96946e1029510b0_ra,w158,h184_pa,w158,h184.png"},
    
  
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
