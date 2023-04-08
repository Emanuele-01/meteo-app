import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Button, Card, Row, Col } from "react-bootstrap"

const MyHome = () => {
    const lat = useSelector(state => state.city.lat)
    const long = useSelector(state => state.city.long)
    const country = useSelector(state => state.city.country)
    const regione = useSelector(state => state.city.regione)
    const nameCity = useSelector(state => state.city.nameCity)
    let weather
    const meteo = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ca6924ea51fb8d4da012ae0dc6aa8e43`)
            if (response.ok) {
                const data = await response.json();
                weather = data
                console.log(weather);
            } else {
                console.log('ha smadonnato qualcosa');
            }
        } catch (error) {
            console.log(error + 'fetch');
        }
    }
    useEffect(() => {
        meteo()
    }, [nameCity])
    return (
        <Card>
            <Card.Body>
                <Card.Title className="text-center">{nameCity}</Card.Title>
                <Row>
                    <Col xs={6} className="text-center mt-2">{country}</Col>
                    <Col xs= {6} className="text-center mt-2">{regione}</Col>
                </Row>
                <img src={weather} alt = {weather} />
                <Card.Text>
                </Card.Text>
                <Card.Text>
                    
                </Card.Text>
                <Card.Text>
                    
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )


}

export default MyHome;