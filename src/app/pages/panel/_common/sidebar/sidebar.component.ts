import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { MenuModule } from 'primeng/menu';
import { MenuItem, MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'app-panel-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    standalone: true,
    imports: [RouterModule, CommonModule, MenuModule, ButtonModule, ToastModule]
})
export class PanelSidebarComponent implements OnInit {

    constructor(private router: Router, private messageService: MessageService) { }

    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            // {
            //     separator: true
            // },
            {
                label: 'Documents',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        command: () => {
                            this.update();
                        }
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-search',
                        command: () => {
                            this.delete();
                        }
                    }
                ]
            },
            {
                label: 'Profile',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog'
                    },
                    {
                        label: 'Messages',
                        icon: 'pi pi-inbox'
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-sign-out'
                    }
                ]
            },
            {
                separator: true
            }
        ];
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Search Completed', detail: 'No results found', life: 3000 });
    }

}