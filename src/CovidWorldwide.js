import React, { useEffect, useState } from 'react';


const CovidWorldwide = () => {

    const [global, setGlobal] = useState([]);

    const [country, setCountry] = useState([]);


    const getdata = async () => {

        try {

            const res = await fetch('https://api.covid19api.com/summary');
            const data = await res.json();
            setGlobal(data.Global)
            setCountry(data.Countries)
            console.log(data.Countries)

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {

        getdata();

    }, []);

    return (
        <>

            <div className="container-fluid mt-3">
                <div className="main-heading">
                    <h1 style={{color: 'white'}} className="mb-5 text-center">Covid <i className="fas fa-virus" style={{ color: '#4E67EB', fontSize: '30px' }}/> Report Worldwide</h1>
                    
                </div>
                <div className="table-responsive ">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>Countries</th>
                                <th>Total Confirmed</th>
                                <th>Total Deaths</th>
                                <th>New Confirmed</th>
                                <th>New Deaths</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Global</th>
                                <th>{global.TotalConfirmed}</th>
                                <th className="global-deaths">{global.TotalDeaths}</th>
                                <th>{global.NewConfirmed}</th>
                                <th className="global-deaths">{global.NewDeaths}</th>

                            </tr>
                        </tbody>

                        <tbody>
                            {
                                country.map((current, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{current.Country}</th>
                                            <th>{current.TotalConfirmed}</th>
                                            <th>{current.TotalDeaths}</th>
                                            <th>{current.NewConfirmed}</th>
                                            <th>{current.NewDeaths}</th>

                                        </tr>
                                    )
                                })

                            }
                        </tbody>



                    </table>
                </div>
            </div>
        </>
    )
}

export default CovidWorldwide
