import { Container } from "react-bootstrap"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Pokemones = () => {
    
    return (
        <>
            <Container
                className="vh-100 vw-100 mt-4 border-bottom rounded"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
                <h1 >Seccion Pokemones</h1>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item>bulbasaur</Dropdown.Item>
                        <Dropdown.Item>ivysaur</Dropdown.Item>
                        <Dropdown.Item>venusaur</Dropdown.Item>
                        <Dropdown.Item>charmander</Dropdown.Item>
                        <Dropdown.Item>charizard</Dropdown.Item>
                        <Dropdown.Item>squirtle</Dropdown.Item>
                        <Dropdown.Item>wartortle</Dropdown.Item>
                        <Dropdown.Item>blastoise</Dropdown.Item>
                        <Dropdown.Item>caterpie</Dropdown.Item>
                        <Dropdown.Item>metapod</Dropdown.Item>
                        <Dropdown.Item>butterfree</Dropdown.Item>
                        <Dropdown.Item>weedle</Dropdown.Item>
                        <Dropdown.Item>kakuna</Dropdown.Item>
                        <Dropdown.Item>beedrill</Dropdown.Item>
                </DropdownButton>
            </Container>
        </>
    )
}

export default Pokemones