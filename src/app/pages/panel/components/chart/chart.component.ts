import { Component } from '@angular/core';
import { VerticalBarChartComponent } from './vertical-bar-chart/vertical-bar-chart.component';
import { HorizontalBarChartComponent } from "./horizontal-bar-chart/horizontal-bar-chart.component";
import { LineChartComponent } from './line-chart/line-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';

@Component({
    selector: 'app-chart-demo',
    templateUrl: './chart.component.html',
    standalone: true,
    imports: [
        VerticalBarChartComponent,
        HorizontalBarChartComponent,
        LineChartComponent,
        PolarAreaChartComponent]
})
export class ChartDemoComponent {

}