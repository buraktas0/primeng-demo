import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Card } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { IftaLabelModule } from 'primeng/iftalabel';
import { FloatLabelModule } from 'primeng/floatlabel';



import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipModule } from "primeng/chip";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { TextareaModule } from "primeng/textarea";
import { InputTextModule } from "primeng/inputtext";


@Component({
    selector: 'app-form-layout',
    templateUrl: './form-layout.component.html',
    styleUrl: './form-layout.component.scss',
    standalone: true,
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        Card,
        InputGroupModule,
        InputGroupAddonModule,
        IftaLabelModule,
        FloatLabelModule,

        AutoCompleteModule,
        CalendarModule,
        ChipModule,
        DropdownModule,
        InputMaskModule,
        InputNumberModule,
        CascadeSelectModule,
        MultiSelectModule,
        TextareaModule,
        InputTextModule]
})
export class FormLayoutComponent implements OnInit {

    constructor(private router: Router) { }

    value: number = 9.99;
    selectedState: any = null;
    dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];

    ngOnInit() {

    }
}