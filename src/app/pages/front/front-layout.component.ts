import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FrontHeaderComponent } from "./_common/header/header.component";
import { RouterModule } from "@angular/router";
import { FrontFooterComponent } from "./_common/footer/footer.component";

@Component({
    selector: 'app-front-layout',
    templateUrl: './front-layout.component.html',
    standalone: true,
    imports: [CommonModule, RouterModule, FrontHeaderComponent, FrontFooterComponent]
})
export class FrontLayoutComponent {

}