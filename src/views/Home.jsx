import '../App.css'

const Home = () =>{
    return(
        <>
            <div 
            className="container vh-100 vw-100 my-4 border-bottom rounded" 
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
                <h1 className="py-4 text-center">Bienvenido maestro Pokémon!</h1>
                <img className="mx-auto d-block img-fluid"
                src={process.env.PUBLIC_URL + '/src/img/home.gif'} alt="Bienvenida" />
            </div>
        </>
    )
}
export default Home