import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/data'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = ""
  contentTitle: string = ""
  contentDescription: string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id");
      console.log("ID:", this.id); // Log do ID
      this.setValuesToComponent(this.id);
    });
  }
  
  setValuesToComponent(id: string | null): void {
    const result = data.find(article => article.id === id);
    console.log("Article:", result); // Log dos dados do artigo
    if (result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photoCover;
    }
  }
}