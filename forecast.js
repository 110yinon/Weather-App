class Forecast {
    constructor() {
        this.key = 'YF00gWs9PvODgmv406d5OLWaLWEuHQUO';
    }
    // get city information
    async getCity(city) {

        const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        const query = `?apikey=${this.key}&q=${city}`;

        const response = await fetch(base + query);

        if (response.status !== 200) {
            throw new Error(`getCityKey: cannot fetch data, status:${response.status}`);
        }

        const data = await response.json();
        return data[0];
    };

    // get weather information
    async getWeather(cityKey) {

        const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
        const query = `${cityKey}?apikey=${this.key}`;

        const response = await fetch(base + query);

        if (response.status !== 200) {
            throw new Error(`getWeather: cannot fetch data, status:${response.status}`);
        }

        const data = await response.json();
        return data[0];
    };

    async updateCity(city) {
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return { cityDets, weather };
    };

}
// responses of api

//
// [
//     {
//         "LocalObservationDateTime": "2021-08-13T22:50:00+09:00",
//         "EpochTime": 1628862600,
//         "WeatherText": "Light rain",
//         "WeatherIcon": 12,
//         "HasPrecipitation": true,
//         "PrecipitationType": "Rain",
//         "IsDayTime": false,
//         "Temperature": {
//             "Metric": {
//                 "Value": 24.9,
//                 "Unit": "C",
//                 "UnitType": 17
//             },
//             "Imperial": {
//                 "Value": 77,
//                 "Unit": "F",
//                 "UnitType": 18
//             }
//         },
//         "MobileLink": "http://www.accuweather.com/en/jp/tokyo/226396/current-weather/226396?lang=en-us",
//         "Link": "http://www.accuweather.com/en/jp/tokyo/226396/current-weather/226396?lang=en-us"
//     }
// ]




//
// [
//     {
//       "Version": 1,
//       "Key": "215854",
//       "Type": "City",
//       "Rank": 31,
//       "LocalizedName": "Tel Aviv",
//       "EnglishName": "Tel Aviv",
//       "PrimaryPostalCode": "",
//       "Region": {
//         "ID": "MEA",
//         "LocalizedName": "Middle East",
//         "EnglishName": "Middle East"
//       },
//       "Country": {
//         "ID": "IL",
//         "LocalizedName": "Israel",
//         "EnglishName": "Israel"
//       },
//       "AdministrativeArea": {
//         "ID": "TA",
//         "LocalizedName": "Tel Aviv",
//         "EnglishName": "Tel Aviv",
//         "Level": 1,
//         "LocalizedType": "District",
//         "EnglishType": "District",
//         "CountryID": "IL"
//       },
//       "TimeZone": {
//         "Code": "IDT",
//         "Name": "Asia/Jerusalem",
//         "GmtOffset": 3,
//         "IsDaylightSaving": true,
//         "NextOffsetChange": "2021-10-30T23:00:00Z"
//       },
//       "GeoPosition": {
//         "Latitude": 32.045,
//         "Longitude": 34.77,
//         "Elevation": {
//           "Metric": {
//             "Value": 34,
//             "Unit": "m",
//             "UnitType": 5
//           },
//           "Imperial": {
//             "Value": 111,
//             "Unit": "ft",
//             "UnitType": 0
//           }
//         }
//       },
//       "IsAlias": false,
//       "SupplementalAdminAreas": [],
//       "DataSets": [
//         "AirQualityCurrentConditions",
//         "AirQualityForecasts",
//         "Alerts",
//         "ForecastConfidence"
//       ]
//     }
//   ]