



// async function getCharById(req, res) {
//     const { idChar } = req.params; // req.params -> {id:12}
//     //Dentro de la funcion haz una peticion a la Api a partir del ID que recibes por params.
//     axios(`${URL}${idChar}`).then(( {data} ) =>{

//     }).catch((axiosError) =>{

//     });
//     try {
//         const apiRequest = await axios(`${URL}${idChar}`);
//         // const apiRequest = await BASE_DE_DATOS_personas("ordenado" , "paginado" , "incluir");
//         const { data } = apiRequest;
//         //Se pudo hacer OK la solicitud  de axios pero la API no tiene info entoncesme indica error
//         if (data.error) {
//             return res.status(404).send(data.error);
//         };

//         const { id, name , status ,species , origin , image , gender} = data;
//         const character ={
//             id: Number(id),
//             name,
//             status,
//             species,
//             origin,
//             image,
//             gender,
//         },


//     } catch (error) {
        
//     }


// }