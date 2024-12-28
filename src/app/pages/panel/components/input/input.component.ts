import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IftaLabelModule } from 'primeng/iftalabel';
import { DatePickerModule } from 'primeng/datepicker';
import { FileSelectEvent, FileUpload, } from 'primeng/fileupload';
import { MessageService } from "primeng/api";
import { provideHttpClient } from '@angular/common/http';

@Component({
    selector: 'app-input-demo',
    templateUrl: './input.component.html',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        CardModule,
        FloatLabelModule,
        IftaLabelModule,
        DatePickerModule,
        FileUpload],
})
export class InputDemoComponent {
    selectedDate: Date | undefined;

    files: any[] = [];

    constructor(private messageService: MessageService) { }

    onSelect(event: FileSelectEvent) {
        console.log(event.currentFiles);
        for (let file of event.currentFiles) {
            this.messageService.add({ severity: 'info', summary: 'File selected', detail: file.name });
        }
    }

    onUpload() {
        for (let file of this.files) {
            this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
        }
    }

}