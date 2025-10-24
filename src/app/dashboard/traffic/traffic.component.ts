import { Component, input } from "@angular/core";

@Component({
    selector: "app-traffic",
    standalone: true,
    imports: [],
    templateUrl: "./traffic.component.html",
    styleUrl: "./traffic.component.css",
})
export class TrafficComponent {
    readonly dummyTrafficData = input<
        {
            id: string;
            value: number;
        }[]
    >();

    readonly maxTraffic = input.required<number>();
}
