import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Card, Row, Col } from "react-bootstrap"

const MyHome = () => {
    const lat = useSelector(state => state.city.lat)
    const long = useSelector(state => state.city.long)
    const country = useSelector(state => state.city.country)
    const regione = useSelector(state => state.city.regione)
    const nameCity = useSelector(state => state.city.nameCity)

    const [weatherMain, setWeatherMain] = useState({})
    const [weatherWind, setWeatherWind] = useState({})
    const [weatherHome, setWeatherHome] = useState([])

    const meteo = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ca6924ea51fb8d4da012ae0dc6aa8e43`)
            if (response.ok) {
                const { main, wind, weather } = await response.clone().json();
                setWeatherMain(main)
                setWeatherWind(wind)
                setWeatherHome(weather)
                console.log(weatherMain);
                console.log(weatherWind);
                console.log(weatherHome);
            } else {
                console.log('errore fetch');
            }
        } catch (error) {
            console.log(error + 'fetch');
        }
    }

    useEffect(() => {
        meteo()
    }, [nameCity])

    const RosaDeiVenti = () => {
        if (weatherWind.deg <= 45) {
            return 'Nord / Nord Est'
        } else if (weatherWind.deg >= 45 && weatherWind.deg <= 90) {
            return 'Nord Est / Est'
        } else if (weatherWind.deg >= 90 && weatherWind.deg <= 135) {
            return 'Est / Sud Est'
        } else if (weatherWind.deg >= 135 && weatherWind.deg <= 180) {
            return 'Sud Est / Sud'
        } else if (weatherWind.deg >= 180 && weatherWind.deg <= 225) {
            return 'Sud / Sud Ovest'
        } else if (weatherWind.deg >= 225 && weatherWind.deg <= 270) {
            return 'Sud Ovest/ Ovest'
        } else if (weatherWind.deg >= 270 && weatherWind.deg <= 315) {
            return 'Ovest / Nord Ovest'
        } else {
            return 'Non ci sono dati disponibili sul vento'
        }
    }

    console.log(RosaDeiVenti());

    let directionWind = RosaDeiVenti()

    return (
        <Row className="justify-content-center">
            <Col xs={10}>
                <Card className="Card">
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title className="text-center">{nameCity}</Card.Title>
                        <Row>
                            <Col xs={6} className="text-center mt-2">{country}</Col>
                            <Col xs={6} className="text-center mt-2">{regione}</Col>
                        </Row>
                        <Card.Text className="mb-5">
                            <h2 className="text-center mt-4">Venti e Temperatura</h2>
                            <Row>
                                <Col xs={6}>
                                    <h2 className="fs-4 text-center mt-4">Venti da :{' ' + directionWind}</h2>
                                </Col>
                                <Col xs={6}>
                                    <h2 className="fs-4 text-center mt-4">Temperatura di:{' ' + (weatherMain.temp - 273.15).toFixed(2) + '°'}</h2>
                                </Col>
                            </Row>
                        </Card.Text>
                        <Card.Text className="mb-5">
                            <h2 className="text-center mt-2">Temp. Max & Min</h2>
                            <Row>
                                <Col xs={6}>
                                    <h2 className="fs-4 text-center mt-4">Temp. Max :{(weatherMain.temp_max - 273.15).toFixed(2) + '°'}</h2>
                                </Col>
                                <Col xs={6}>
                                    <h2 className="fs-4 text-center mt-4">Temp. Min:{(weatherMain.temp_min - 273.15).toFixed(2) + '°'}</h2>
                                </Col>
                            </Row>
                        </Card.Text>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    )


}

export default MyHome;