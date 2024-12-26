import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Menubar } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from "primeng/api";
import { Router, RouterModule } from "@angular/router";
import { InputTextModule } from "primeng/inputtext";
import { LayoutService } from "../../layout.service";

@Component({
    selector: 'app-panel-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: true,
    imports: [RouterModule, CommonModule, Menubar, ButtonModule, InputTextModule, AvatarModule]
})
export class PanelHeaderComponent implements OnInit {
    items: MenuItem[] | undefined;

    constructor(
        private router: Router,
        private layoutService: LayoutService,
    ) {

    }

    ngOnInit() {
        this.items = [
            {
                label: 'Dashboard',
                icon: 'pi pi-objects-column',
                command: () => { this.navigate('/panel'); }
            },
            {
                label: 'Inputs',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'Form Layout',
                        icon: 'pi pi-table',
                        command: () => { this.navigate('/panel/form-layouts'); }
                    },
                    {
                        label: 'Input',
                        icon: 'pi pi-table'
                    }
                ]
            },
            {
                label: 'Projects',
                icon: 'pi pi-star',
                items: [
                    {
                        label: 'Core',
                        icon: 'pi pi-bolt'
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server'
                    },
                    {
                        separator: true,
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil'
                    },
                ],
            },
        ];
    }

    toggleSidebar() {
        this.layoutService.toggleSidebar();
    }

    navigate(route: string) {
        this.router.navigate([route]);
    }
}