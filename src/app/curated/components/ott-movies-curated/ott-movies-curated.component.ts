import { Component, OnInit,Input } from '@angular/core';
import { AppService } from '../../../analytics/services/app.service';

@Component({
  selector: 'app-ott-movies-curated',
  templateUrl: './ott-movies-curated.component.html',
  styleUrls: ['./ott-movies-curated.component.scss']
})
export class OttMoviesCuratedComponent implements OnInit {

  constructor(private service: AppService) { }

  @Input() data;

  moviesData = [];
  movieList = null;

  ngOnInit(): void {
    this.movieList = this.data.movies;
    this.getDummyMovie();
  }

  getDummyMovie(): void {
    for (let index = 0; index < 3; index++) {
      let index = Math.floor(Math.random() * this.movieList.length);
      let item = this.movieList[index];
      this.movieList.splice(index,1);

      this.service.getDummyMovie(item).subscribe(
        (data) => {
          this.moviesData.push(data)
        },
        (error) => {}
      );
    }
  }

}
