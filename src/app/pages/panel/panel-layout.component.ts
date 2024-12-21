import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FrontFooterComponent } from "../front/_common/footer/footer.component";
import { PanelHeaderComponent } from "./_common/header/header.component";
import { PanelSidebarComponent } from "./_common/sidebar/sidebar.component";

@Component({
    selector: 'app-panel-layout',
    templateUrl: './panel-layout.component.html',
    standalone: true,
    imports: [CommonModule, RouterModule, PanelHeaderComponent, PanelSidebarComponent, FrontFooterComponent]
})
export class PanelLayoutComponent {

}