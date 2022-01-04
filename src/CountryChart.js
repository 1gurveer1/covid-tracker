import React, { useEffect, useState } from 'react'
import Countries from './Countries'
import { Bar } from 'react-chartjs-2'
import CountUp from 'react-countup'

const CountryChart = () => {

    const [confirmed, setConfirmed] = useState([]);
    const [death, setDeath] = useState([]);
    const [update, setUpdate] = useState([]);

    const chartdata = async () => {

        try {

            const res = await fetch('https://covid19.mathdro.id/api');
            const data = await res.json();
            console.log(data)
            setConfirmed(data.confirmed.value)
            setDeath(data.deaths.value)
            setUpdate(data.lastUpdate)

        } catch (error) {
            console.log(error);
        }

    }

    const handleCountry = async (country) => {
        try {

            const res2 = await fetch(`https://covid19.mathdro.id/api/countries/${country}`);
            const countries = await res2.json();
            console.log(countries);
            setConfirmed(countries.confirmed.value);
            setDeath(countries.deaths.value);
            setUpdate(countries.lastUpdate);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        chartdata();

    }, []);

    return (
        <>
            <div className="container text-center text-light" style={{ marginTop: '50px' }}>
                <h1 className="my-4"> Covid 19 <i className="fas fa-virus" style={{ color: '#4E67EB', fontSize: '30px' }} /> Statistics</h1>
                <Countries handleCountry={handleCountry}></Countries>
                <div className="d-flex row">

                    <div className="card my-4 confirmed mx-auto">
                        <div className="card-body" style={{ textAlign: 'center' }}>
                            <h5 className="card-title" style={{ textAlign: 'center', fontSize: '25px' }}>Confirmed</h5>
                            <h2 style={{ color: '#4E67EB' }}>
                                <CountUp
                                    start={0}
                                    end={confirmed}
                                    duration={3.0}
                                />
                            </h2>

                            <p className="card-text">Number of active cases of covid 19.</p>

                        </div>
                    </div>
                    <div className="card my-4 mx-4 mx-auto deaths">
                        <div className="card-body" style={{ textAlign: 'center' }}>
                            <h5 className="card-title" style={{ fontSize: '25px' }}>Deaths</h5>
                            <h2 style={{ color: 'rgb(226, 54, 54)' }}>
                                <CountUp
                                    start={0}
                                    end={death}
                                    duration={3.0}
                                /></h2>
                            <p className="card-text">Number of deaths from covid 19.</p>

                        </div>
                    </div>
                    <div className="card my-4 update mx-auto">
                        <div className="card-body" style={{ textAlign: 'center' }}>
                            <h5 className="card-title" style={{ fontSize: '25px' }}>Date</h5>
                            <h2 style={{ color: '#82AA2F' }}>{update}</h2>
                            <p className="card-text">Last updated.</p>

                        </div>
                    </div>
                </div>
                <div className="container" style={{ marginTop: '100px' }}>
                    <Bar
                        data={{
                            labels: ['Covid 19 confirmed cases and deaths'],
                            datasets: [
                                {

                                    label: 'Confirmed',
                                    data: [confirmed],
                                    backgroundColor: '#4E67EB',
                                },
                                {
                                    label: 'Deaths',
                                    data: [death],
                                    backgroundColor: 'rgb(226, 54, 54)'
                                }
                            ],
                        }}
                        height={140}
                        width={300}
                    />
                </div>
            </div>

        </>
    )
}

export default CountryChart
