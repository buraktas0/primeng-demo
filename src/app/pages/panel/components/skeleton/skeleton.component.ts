import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Skeleton } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-skeleton-demo',
    templateUrl: './skeleton.component.html',
    standalone: true,
    imports: [CardModule, Skeleton, TableModule]
})
export class SkeletonDemoComponent implements OnInit {
    products: any[] | undefined;

    ngOnInit() {
        this.products = Array.from({ length: 5 }).map((_, i) => `Item #${i}`);
    }
}