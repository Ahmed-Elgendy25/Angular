import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    viewChild,
} from "@angular/core";
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-new-ticket",
    standalone: true,
    imports: [ButtonComponent, ControlComponent, FormsModule],
    templateUrl: "./new-ticket.component.html",
    styleUrl: "./new-ticket.component.css",
})
export class NewTicketComponent implements AfterViewInit, OnInit {
    @ViewChild("form") private form?: ElementRef<HTMLFormElement>;
    //  private form = viewChild<ElementRef<HTMLFormElement> | undefined>("form");

    onSubmit(title: string, ticket: string) {
        console.log(`title: ${title}`);
        console.log(`ticket: ${ticket}`);
        // this.form().nativeElement.reset();
    }

    ngOnInit() {
        console.log("ON INIT");
        console.log(this.form?.nativeElement);
    }
    ngAfterViewInit() {
        console.log("AFTER VIEW INIT");
        console.log(this.form?.nativeElement);
    }
}
