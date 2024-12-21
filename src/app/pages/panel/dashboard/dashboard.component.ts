import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    standalone: true,
    imports: [RouterModule, CommonModule]
})
export class DashboardComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {

    }
}