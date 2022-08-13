/* 1. creo la const url
   2. creo un array vacio para guardar la información
   3. creo la ventana con su init que es la que va ejecutar el resto
   4. creo init, diciendole que obtenga información
   5. llamo a la función que inicialice en el paso 4 para almacenar los datos en crudo
   6. lanzo la peticion a la api
   7. cambiar a formato nuevo json
   8. retorname el resultado
   9. mapear los datos de la  api

*/

//1
const URL = ("https://restcountries.com/v3.1/all")
//2
const saveListPaises = []
//3 lanzar cuando se cargue la ventana
window.onload = () => {
    //funcion disparadora
    init();
}
//4
const init = async () => {
    getPaises();
    // lanzar la funcion que obtiene los datos de la api
    const paises = await getPaises();
    console.log(paises);
    // lanzar la función que formatea los datos de la api
    mappedPaises(paises);
}

const getPaises = async () => {

    // lanzar la petición a la api para extraer los datos
    const paises2 = await fetch(URL);
    //cambiar formato
    const paises2Jonson = await paises2.json();
    return paises2Jonson;

}


const mappedPaises = async (paises) => {

    // mapear los datos de la api

    paises.map((paises) => {
        // funcion de pintado
        return printPaises({
            bandera: paises.flags.png,
            nombre: paises.name.common,
            capital: paises.capital,
            población: paises.population,
            region: paises.region,
            area: paises.area,


        })

    })
};


const printPaises = async (paises) => {
    console.log(paises);
    // selector query-id
    const restPaises = document.querySelector("#restPaises")
    restPaises.innerHTML += `
<div class="containerSingle">
<div class="container-principal">
<div class="img-banderas"><img src="${paises.bandera}"alt="${paises.nombre}"/></div>

<h2> ${paises.nombre}</h2>
<h3>${paises.capital}</h3>
<h3 class="h3">Población: ${paises.población}</h3>
<h4>Región: ${paises.region}</h4>
<h4>Area: ${paises.area}</h4>

</div>
</div>

`
}










