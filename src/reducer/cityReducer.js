export const CitiesInitialList = {
    cities: [
        { "id": 1768401, "name": "Namsos", "region": "Nord-Trondelag", "country": "Norway", "lat": 64.48, "lon": 11.5, "url": "namsos-nord-trondelag-norway" },
        { "id": 1764642, "name": "Guldvik", "region": "Nord-Trondelag", "country": "Norway", "lat": 64.47, "lon": 11.45, "url": "guldvik-nord-trondelag-norway" },
        { "id": 1765790, "name": "Hoyknes", "region": "Nord-Trondelag", "country": "Norway", "lat": 64.47, "lon": 11.57, "url": "hoyknes-nord-trondelag-norway" },
        { "id": 1765516, "name": "Hoknes", "region": "Nord-Trondelag", "country": "Norway", "lat": 64.47, "lon": 11.57, "url": "hoknes-nord-trondelag-norway" },
        { "id": 1769449, "name": "Ramsvik", "region": "Nord-Trondelag", "country": "Norway", "lat": 64.52, "lon": 11.48, "url": "ramsvik-nord-trondelag-norway" },
        { "id": 1771430, "name": "Spillam", "region": "Nord-Trondelag", "country": "Norway", "lat": 64.45, "lon": 11.53, "url": "spillam-nord-trondelag-norway" },
        { "id": 1771431, "name": "Spillum I Namdalen", "region": "Nord-Trondelag", "country": "Norway", "lat": 64.45, "lon": 11.53, "url": "spillum-i-namdalen-nord-trondelag-norway" },
        { "id": 1771432, "name": "Spillum", "region": "Nord-Trondelag", "country": "Norway", "lat": 64.45, "lon": 11.53, "url": "spillum-nord-trondelag-norway" },
        { "id": 1773124, "name": "Vemundvik", "region": "Nord-Trondelag", "country": "Norway", "lat": 64.52, "lon": 11.53, "url": "vemundvik-nord-trondelag-norway" },
        { "id": 1767848, "name": "Maerraneset", "region": "Nord-Trondelag", "country": "Norway", "lat": 64.45, "lon": 11.45, "url": "maerraneset-nord-trondelag-norway" }
    ],
    sortparams: {
        "name": true,
        "region": true,
        "country": true,
        "lat": true,
        "lon": true
    }
};

export const CityReducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_SORTED':
            return { ...state, cities: payload.cities, sortparams: { ...state.sortparams, [payload.col]: payload.dir } };
        case 'SET_SEARCH':
            return { ...state, cities: payload.cities };
    }
};