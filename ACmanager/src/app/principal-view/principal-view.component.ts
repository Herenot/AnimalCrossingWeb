import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.scss']
})
export class PrincipalViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

}
