import React, { useEffect, useState } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

const Countries = ({ handleCountry }) => {

    const [country, setCountry] = useState([]);
    

    const getdata = async () => {

        try {

            const res = await fetch('https://api.covid19api.com/summary');
            const data = await res.json();
            setCountry(data.Countries)

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {

        getdata();

    }, []);

    return (
        <div className="container text-light">
            <FormControl style={{ backgroundColor: '#202020', padding: '5px', borderRadius: '5px' }}>
                <NativeSelect style={{ color: 'white' }} default="" onChange={(e) => handleCountry(e.target.value)}>
                    <option className="option" style={{ color: 'white', backgroundColor: '#202020', textAlign: 'center' }} value="global">Global</option>
                    {
                        country.map((current, index) => <option style={{ color: 'white', backgroundColor: '#202020', textAlign: 'center'}} key={index} value={current.Country}>{current.Country}</option>
                        )
                    }
                </NativeSelect>
            </FormControl>
        </div>

    )
}

export default Countries
