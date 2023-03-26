# Pokemon Status
¡Bienvenido a nuestra página web de React que utiliza la API de Pokémon! En esta aplicación, podrás buscar información sobre tus Pokémon favoritos utilizando la PokéAPI.

En nuestra página principal, encontrarás una lista de los Pokémon más populares. Puedes hacer clic en cualquier Pokémon para ver más información sobre él. Utilizamos el componente NavLink de React Router para crear enlaces a cada página.

Al hacer clic en un Pokémon, serás llevado a su página de detalles. Utilizamos el hook useParams de React Router para obtener el ID del Pokémon de la URL y hacer una consulta a la API de Pokémon para obtener más información sobre él. Utilizamos también el hook useEffect para asegurarnos de que se haga la consulta a la API una vez que se ha obtenido el ID del Pokémon.

En la página de detalles del Pokémon, podrás ver su imagen, su nombre, su tipo y sus stats. Utilizamos el componente useNavigate de React Router para agregar un botón de "Buscar" que te llevará a los stats del pokemon seleccionado.

¡Esperamos que disfrutes usando nuestra aplicación y aprendas mucho sobre tus Pokémon favoritos! Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nosotros.
![image](https://user-images.githubusercontent.com/113071563/227809442-15fe2870-0aec-47e8-a2b6-1998aca9d539.png)
