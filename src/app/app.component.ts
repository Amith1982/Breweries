
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Subject, Observable, pipe } from "rxjs";
import { BreweryService } from './shared/brewery.service';
import {
    tap,
    switchMap,
    debounceTime,
    distinctUntilChanged,
    map
} from "rxjs/operators"
import { states } from './shared/states-data';
import { Brewery } from './shared/brewery';

@Component({
    selector: 'app-root',
    queries: {
        "contentRef": new ViewChild("contentRef")
    },
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    title = "Brewery-explorer"
    selectedState: string;
    listofStates = states;
    loading: boolean = false;
    breweryList$: Observable<Brewery[]>;
    private searchTerms = new Subject<string>();
    public contentRef!: ElementRef;

    constructor(private breweryService: BreweryService) { }


    search(term?: string) {
        this.searchTerms.next(term);
    }

    scrollToTop() {
        this.contentRef.nativeElement.scrollTo(0, 0);
    }

    reset(searchText?: any) {
        searchText.value = null;
        this.selectedState = undefined;
        this.searchTerms.next('');
    }

    ngOnInit() {
        this.breweryList$ = this.searchTerms.pipe(
            tap(_ => this.loading = true),
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) =>
                this.breweryService.searchBrewery(term)
            ),
            tap(_ => this.loading = false)
        )
    }
}
