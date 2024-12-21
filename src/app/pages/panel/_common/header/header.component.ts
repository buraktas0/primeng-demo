import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MegaMenu } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MegaMenuItem } from "primeng/api";
import { Router, RouterModule } from "@angular/router";

@Component({
    selector: 'app-panel-header',
    templateUrl: './header.component.html',
    standalone: true,
    imports: [RouterModule, MegaMenu, ButtonModule, CommonModule, AvatarModule]
})
export class PanelHeaderComponent implements OnInit {
    items: MegaMenuItem[] | undefined;

    constructor(private router: Router) { }

    ngOnInit() {
        this.items = [

        ];
    }
}