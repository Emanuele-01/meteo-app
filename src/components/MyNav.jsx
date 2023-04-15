import { useState } from "react";
import { Button, Container, Navbar, Form } from "react-bootstrap"
import { useDispatch } from "react-redux";

const MyNav = () => {
    const [query, setQuery] = useState(' ');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=ca6924ea51fb8d4da012ae0dc6aa8e43`);
            if (response.ok) {
                const data = await response.json();
                dispatch({ type: 'SET_LAT', payload: data[0].lat })
                dispatch({ type: 'SET_LONG', payload: data[0].lon })
                dispatch({ type: 'SET_COUNTRY', payload: data[0].country })
                dispatch({ type: 'SET_REGIONE', payload: data[0].state })
                dispatch({ type: 'SET_NAME_CITY', payload: data[0].name })
                console.log(data);
            } else {
                console.log('Error fetching');
            }
        } catch (error) {
            console.log('Error fetching');
        }
    }

    const handleChange = (e) => {
        setQuery(e.target.value);
    }


    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16">
                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                    </svg></Navbar.Brand>
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
        </>
    )
}

export default MyNav;