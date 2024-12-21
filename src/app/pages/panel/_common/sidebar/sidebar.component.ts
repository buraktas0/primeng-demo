import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";

@Component({
    selector: 'app-panel-sidebar',
    templateUrl: './sidebar.component.html',
    standalone: true,
    imports: [RouterModule, CommonModule]
})
export class PanelSidebarComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {

    }
}