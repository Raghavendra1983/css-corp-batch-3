import React, { createRef, useContext } from 'react';
import { CityContext } from './context/cityContext';


const inputRef = createRef();
const app = () => {
    const { sortCities, searchCities, data } = useContext(CityContext);
    console.log(data);
    const handleChange = () => {
        console.log(inputRef.current.value);
        searchCities(inputRef.current.value);
    }
    const sortBy = (col, dir) => {
        sortCities(col, dir);
    }
    return (
        <div>
            <input type="text" ref={inputRef} onChange={() => handleChange()}></input>
            <table>
                <th onClick={() => sortBy('name', !data.sortparams.name)}>City</th>
                <th onClick={() => sortBy('region', !data.sortparams.region)}>Region</th>
                <th onClick={() => sortBy('country', !data.sortparams.country)}>Country</th>
                <th onClick={() => sortBy('lat', !data.sortparams.lat)}>Latitude</th>
                <th onClick={() => sortBy('lon', !data.sortparams.lon)}>Longitude</th>
                <tbody>
                    {data.cities.map((item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.region}</td>
                            <td>{item.country}</td>
                            <td>{item.lat}</td>
                            <td>{item.lon}</td>
                        </tr>
                    )))}
                </tbody></table>
        </div>
    )
}
export default app;