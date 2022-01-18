import React, { createContext, useReducer } from 'react';
import { CitiesInitialList, CityReducer } from '../reducer/cityReducer';


export const CityContext = createContext();

export const CityProvider = ({ children }) => {
    const [state, dispatcher] = useReducer(CityReducer, CitiesInitialList);
    const sortCities = (col, dir) => {
        function sortAsc(a, b) {
            if (typeof a[col] === "number") {
                return a[col] - b[col];
            }
            else {
                if (a[col] < b[col]) {
                    return -1;
                }
                if (a[col] > b[col]) {
                    return 1;
                }
                return 0;
            }
        }
        function sortDsc(a, b) {
            if (typeof a[col] === "number") {
                return b[col] - a[col];
            }
            else {
                if (a[col] < b[col]) {
                    return 1;
                }
                if (a[col] > b[col]) {
                    return -1;
                }
                return 0;
            }
        }
        (dir) ? state.cities.sort(sortAsc) : state.cities.sort(sortDsc);

        console.log(state.cities);

        let payload = {
            cities: state.cities,
            col: col,
            dir: dir
        }
        dispatcher({ type: 'SET_SORTED', payload });
    }
    const searchCities = (term) => {
        let objArr = CitiesInitialList.cities;
        for (let i = 0; i < objArr.length; i++) {
            let keys = Object.keys(objArr[i]);
            for (let j = 0; j < keys.length; j++) {
                if (String(objArr[i][keys[j]]).toLowerCase() === term.toLowerCase()) {
                    console.log(objArr[i]);
                    let payload = {
                        cities: [objArr[i]]
                    }
                    dispatcher({ type: 'SET_SEARCH', payload });
                    return;
                }
                else {
                    let payload = {
                        cities: objArr
                    }
                    dispatcher({ type: 'SET_SEARCH', payload })
                }
            }
        }

    }
    return (
        <CityContext.Provider value={{ sortCities, searchCities, data: state }}>{children}</CityContext.Provider>
    )
}