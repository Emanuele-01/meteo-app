import { useState } from "react";
import { Button, Container, Navbar, Form } from "react-bootstrap"
import { useDispatch} from "react-redux";

const MyNav = () => {
    const [query, setQuery] = useState(' ');
    const [infoCity, setInfoCity] = useState([]);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=ca6924ea51fb8d4da012ae0dc6aa8e43`);
            if (response.ok) {
                const data = await response.json();
                setInfoCity(data);
                console.log(infoCity);
            } else {
                console.log('Error fetching');
            }
        } catch (error) {
            console.log('Error fetching');
        }
        dispatch({type : 'SET_LAT', payload : infoCity[0].lat})
        dispatch({type : 'SET_LONG', payload : infoCity[0].lon})
        dispatch({type : 'SET_COUNTRY', payload : infoCity[0].country})
        dispatch({type : 'SET_REGIONE', payload : infoCity[0].state})
    }

    const handleChange = (e) => {
        setQuery(e.target.value);
    }


    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex" onSubmit={handleSubmit}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                value={query}
                                className="me-2"
                                aria-label="Search"
                                onChange={handleChange}
                            />
                            <Button type="submit" variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <span>{infoCity.length > 0 ? infoCity[0].lat : ''}</span>
            </div>
        </>
    )
}

export default MyNav;