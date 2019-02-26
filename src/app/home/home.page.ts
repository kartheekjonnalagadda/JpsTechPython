import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "../data-service.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  constructor(
    private service: DataServiceService,
    public sanitizer: DomSanitizer
  ) {}
  courses: any;
  ngOnInit() {
    this.courses = this.service.getCourses();
  }
}
