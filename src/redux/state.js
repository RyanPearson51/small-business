const state= {
    user: {
        'isLoggedIn': false,
        'username': null
    },
    listings: [
        {
            'id': 1,
            'name': 'Mandolas Italian Kitchen',
            'description': 'Family run Italian Market promoting Italian culture and cuisine',
            'hours': '11am - 10pm',
            'address': '4700 W Guadalupe St #12, Austin TX 78756',
            'lat': '30.316020',
            'long': '-97.733550'
        },
        {
            'id': 2,
            'name': "Rudy's",
            'description': 'Country Store and Barbecue',
            'hours': '6am - 9pm',
            'address': '3914 N Lamar Blvd, Austin TX 78756',
            'lat': '30.3074215',
            'long': '-97.742008'
        },
        {
            'id': 3,
            'name': "Lucy's",
            'description': 'Homegrown Austin restaurant specializing in fried chicken',
            'hours': '11am-9pm',
            'address': '5408 Burnet Road, Austin TX 78756',
            'lat': '30.328709',
            'long': '-97.740022'
        }
    ]
};
//
export default state;