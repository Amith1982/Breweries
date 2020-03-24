import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { BreweryService } from './brewery.service';
import { Brewery } from './brewery';

describe('BreweryService', () => {
  let service: BreweryService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BreweryService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('be able to retrieve posts from the API bia GET', () => {
    const dummyPosts: Brewery[] = [
      {
        "id": 3093,
        "name": "Astro Lab Brewing",
        "brewery_type": "planning",
        "street": "",
        "city": "Silver Spring",
        "state": "Maryland",
        "postal_code": "20910-4519",
        "country": "United States",
        "longitude": null,
        "latitude": null,
        "phone": "3106910475",
        "website_url": "http://www.astrolabbrewing.com",
        "tag_list": [

        ]
      },
      {
        "id": 3262,
        "name": "Castle Island Brewing Co.",
        "brewery_type": "micro",
        "street": "31 Astor Ave",
        "city": "Norwood",
        "state": "Massachusetts",
        "postal_code": "02062-5016",
        "country": "United States",
        "longitude": "-71.1918643775713",
        "latitude": "42.1693129661749",
        "phone": "7819512029",
        "website_url": "http://www.castleislandbeer.com",
        "tag_list": [

        ]
      },
      {
        "id": 5978,
        "name": "Wet Dog Cafe \u0026 Brewery",
        "brewery_type": "brewpub",
        "street": "990 Astor St",
        "city": "Astoria",
        "state": "Oregon",
        "postal_code": "97103-4201",
        "country": "United States",
        "longitude": "-123.835821",
        "latitude": "46.190557",
        "phone": "5033256975",
        "website_url": "http://www.wetdogcafe.com",
        "tag_list": [

        ]
      },
      {
        "id": 1658,
        "name": "Broken Symmetry Gastro Brewery",
        "brewery_type": "brewpub",
        "street": "5 Depot Pl",
        "city": "Bethel",
        "state": "Connecticut",
        "postal_code": "06801-2507",
        "country": "United States",
        "longitude": "-73.4142477614171",
        "latitude": "41.3709733353379",
        "phone": "2037311735",
        "website_url": "",
        "tag_list": [

        ]
      }
    ]
    service.searchBrewery('astro').subscribe(posts => {
      expect(posts.length).toBe(0);
    })
    const req = httpTestingController.expectOne('https://api.openbrewerydb.org/breweries/search?query=astro');
     expect(req.request.method).toEqual('GET');
     req.flush(null, { status: 200, statusText:'Ok' });
  });

  it('be able to retrieve no posts when there API call invalid', () => {
    const dummyPosts: Brewery[] = [

    ]
    service.searchBrewery('').subscribe(posts => {
      expect(posts.length).toBe(0);
      expect(posts).toEqual(dummyPosts);
    })
  });

  it('be able to retrieve no posts when there API call failure', () => {
    let httpTestingController: HttpTestingController;
    let term = 'a';
    let endpoint: string = `https://api.openbrewerydb.org/breweries/search?query=`;
    const msg = 'deliberate 404 error';

    let url = `${endpoint}${term}`;
    let req;

    service.searchBrewery('').subscribe(posts => {
      expect(posts.length).toBe(0);
      expect(posts).toEqual([]);
    })
  })

  });




  // it('test  handle error', () => {
  //   const handle = service.handleError<Brewery>('get',{});
  //   expect(handle).toBeInstanceOf(Function);
      
 
