import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
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
    @ViewChild('menubar') menubar: any;
    isSideMenuCollapsed = false;
    items: MenuItem[] | undefined;

    constructor(
        private router: Router,
        private layoutService: LayoutService
    ) { }


    ngOnInit() {
        this.items = [
            {
                label: 'Dashboard',
                icon: 'pi pi-objects-column',
                command: () => { this.navigate('/panel'); }
            },
            {
                label: 'Components',
                icon: 'pi pi-clone',
                items: [
                    {
                        label: 'Form Layout',
                        icon: 'pi pi-clone',
                        command: () => { this.navigate('/panel/form-layout'); }
                    },
                    {
                        label: 'Input',
                        icon: 'pi pi-check-square'
                    },
                    {
                        label: 'Button',
                        icon: 'pi pi-box'
                    },
                    {
                        label: 'Table',
                        icon: 'pi pi-table',
                        command: () => { this.navigate('/panel/table'); }
                    },
                    {
                        label: 'Chart',
                        icon: 'pi pi-chart-bar',
                        command: () => { this.navigate('/panel/chart'); }
                    },
                    {
                        label: 'Skeleton',
                        icon: 'pi pi-circle',
                        command: () => { this.navigate('/panel/skeleton'); }
                    },
                    {
                        label: 'Panel',
                        icon: 'pi pi-tablet'
                    },
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-globe',
                items: [

                    {
                        label: 'Auth',
                        icon: 'pi pi-user',
                        items: [

                        ]
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-exclamation-circle'
                    },
                    {
                        separator: true,
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-circle-off'
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