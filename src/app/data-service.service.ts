import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataServiceService {
  constructor() {}

  getCourses() {
    return [
      {
        title: "LCM of two given numbers Program",
        description: "LCM of two given numbers Program",
        url: "https://www.youtube.com/embed/_90TQRLtDBA"
      },
      {
        title: "Python Data Types Lists and Tuples Explained",
        description: "Python Data Types Lists and Tuples Explained",
        url: "https://www.youtube.com/embed/2qGi-o72v9w"
      },
      {
        title: "Python Data Types Numbers, Strings",
        description: "Python Data Types Numbers, Strings",
        url: "https://www.youtube.com/embed/ziZA2t0Uxeg"
      }
    ];
  }
}
