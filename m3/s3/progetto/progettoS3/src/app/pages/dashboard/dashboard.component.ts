import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { iUser } from '../../models/i-user';
import { iMovie } from '../../models/i-movie';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  moviesArr: iMovie[] = []

  constructor(private authSvc:AuthService, private movieSvc:MoviesService){}

  user:iUser|undefined;

  ngOnInit(){

    this.authSvc.user$.subscribe(user => {

      this.user = user || undefined;

    this.movieSvc.getAll()

    })

  }

}
