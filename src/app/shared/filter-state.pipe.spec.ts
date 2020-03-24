import { FilterStatePipe } from './filter-state.pipe';
import { Brewery } from './brewery';
const pipe = new FilterStatePipe();

describe('FilterStatePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterStatePipe();
    expect(pipe).toBeTruthy();
  });

  it('provde a value and expect a result', () => { 
    expect(pipe.transform( [], 'Alaska')).toEqual([]);

  })
  it('provde a value and expect a result', () => { 
    const mockBreweries: Brewery[] = [
      {
         "id":3093,
         "name":"Astro Lab Brewing",
         "brewery_type":"planning",
         "street":"",
         "city":"Silver Spring",
         "state":"Maryland",
         "postal_code":"20910-4519",
         "country":"United States",
         "longitude":null,
         "latitude":null,
         "phone":"3106910475",
         "website_url":"http://www.astrolabbrewing.com",
         "tag_list":[
   
         ]
      },
      {
         "id":3262,
         "name":"Castle Island Brewing Co.",
         "brewery_type":"micro",
         "street":"31 Astor Ave",
         "city":"Norwood",
         "state":"Massachusetts",
         "postal_code":"02062-5016",
         "country":"United States",
         "longitude":"-71.1918643775713",
         "latitude":"42.1693129661749",
         "phone":"7819512029",
         "website_url":"http://www.castleislandbeer.com",
         "tag_list":[
   
         ]
      },
      {
         "id":5978,
         "name":"Wet Dog Cafe \u0026 Brewery",
         "brewery_type":"brewpub",
         "street":"990 Astor St",
         "city":"Astoria",
         "state":"Oregon",
         "postal_code":"97103-4201",
         "country":"United States",
         "longitude":"-123.835821",
         "latitude":"46.190557",
         "phone":"5033256975",
         "website_url":"http://www.wetdogcafe.com",
         "tag_list":[
   
         ]
      },
      {
         "id":1658,
         "name":"Broken Symmetry Gastro Brewery",
         "brewery_type":"brewpub",
         "street":"5 Depot Pl",
         "city":"Bethel",
         "state":"Connecticut",
         "postal_code":"06801-2507",
         "country":"United States",
         "longitude":"-73.4142477614171",
         "latitude":"41.3709733353379",
         "phone":"2037311735",
         "website_url":"",
         "tag_list":[
   
         ]
      }
   ]

   const result: Brewery[] = [
    {
       "id":3093,
       "name":"Astro Lab Brewing",
       "brewery_type":"planning",
       "street":"",
       "city":"Silver Spring",
       "state":"Maryland",
       "postal_code":"20910-4519",
       "country":"United States",
       "longitude":null,
       "latitude":null,
       "phone":"3106910475",
       "website_url":"http://www.astrolabbrewing.com",
       "tag_list":[
 
       ]
    }]
    expect(pipe.transform( mockBreweries, 'Maryland')).toEqual(result);

  })
});
