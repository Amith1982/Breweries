import { TestBed, async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BreweryService } from './shared/brewery.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FilterStatePipe } from './shared/filter-state.pipe';
import { BreweryListComponent } from './brewery/brewery-list/brewery-list.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const breweryServiceStub: BreweryService = jasmine.createSpyObj('BreweryService', ['searchBrewery']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FilterStatePipe,
        BreweryListComponent
      ],
      imports: [HttpClientTestingModule],
      providers: [BreweryService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });


  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Brewery-explorer'`, () => {
    expect(app.title).toEqual('Brewery-explorer');
  });

  it(`should test Reset`, () => {

    let searchField = fixture.debugElement.query(By.css('.search'));
    searchField.nativeElement.value = 'i';
    //   searchField.nativeElement.dispatchEvent(new Event('keyup'));
    app.reset(searchField)
    expect(app.selectedState).toBeUndefined();
  });


  it('should call HeroService.searchHeroes', async(() => {
    let newSpy = spyOn(app, 'search');
    newSpy.and.callThrough();
    app.search('i')
    fixture.detectChanges();
    expect(newSpy).toHaveBeenCalled();
  }));


  it('should search for location on init', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const rendered: DebugElement = fixture.debugElement.query(By.css('.search'));

    rendered.nativeElement.value = 'test';

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(app.breweryList$).toBeDefined();
    });
    app.reset(rendered)
    expect(app.selectedState).toBeUndefined();
  }));

});
