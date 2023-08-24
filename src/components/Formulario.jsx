
const Formulario = () => {
    return (
      <>
      <p className=" text-lg text-center mb-10">
        Añade tus pacientes y {''} <span className=" text-indigo-600 font-bold"> Administralos</span>
      </p>

      <form className=" bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md">
        <div>
            <label 
            htmlFor="mascota"
            className=" text-gray-700 uppercase font-bold"
            >Nombre Mascota</label>
            <input 
                id="mascota"
                type="text"
                placeholder="nombre de la mascota"
                className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div>
            <label 
            htmlFor="mascota"
            className=" text-gray-700 uppercase font-bold"
            >Nombre Mascota</label>
            <input 
                id="mascota"
                type="text"
                placeholder="nombre de la mascota"
                className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div>
            <label 
            htmlFor="mascota"
            className=" text-gray-700 uppercase font-bold"
            >Nombre Mascota</label>
            <input 
                id="mascota"
                type="text"
                placeholder="nombre de la mascota"
                className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div>
            <label 
            htmlFor="mascota"
            className=" text-gray-700 uppercase font-bold"
            >Nombre Mascota</label>
            <input 
                id="mascota"
                type="text"
                placeholder="nombre de la mascota"
                className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div>
            <label 
            htmlFor="mascota"
            className=" text-gray-700 uppercase font-bold"
            >Nombre Mascota</label>
            <input 
                id="mascota"
                type="text"
                placeholder="nombre de la mascota"
                className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"/>
        </div>

        <input  
            type="submit"
            className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value="Agregar Pacientes"
        />

      </form>
      </>
    )
  }
  
  export default Formulario;