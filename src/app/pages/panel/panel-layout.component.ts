import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PanelHeaderComponent } from "./_common/header/header.component";
import { PanelSidebarComponent } from "./_common/sidebar/sidebar.component";
import { PanelFooterComponent } from "./_common/footer/footer.component";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";

@Component({
    selector: 'app-panel-layout',
    templateUrl: './panel-layout.component.html',
    styleUrl: './panel-layout.component.scss',
    standalone: true,
    providers: [MessageService],
    imports: [CommonModule, RouterModule, PanelHeaderComponent, PanelSidebarComponent, PanelFooterComponent, ToastModule]
})
export class PanelLayoutComponent {

}