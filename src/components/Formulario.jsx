
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
                placeholder="Nombre de la mascota"
                className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div>
            <label 
            htmlFor="propietario"
            className=" text-gray-700 uppercase font-bold"
            >Nombre propietario</label>
            <input 
                id="propietario"
                type="text"
                placeholder="Nombre del propietario"
                className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div>
            <label 
            htmlFor="email"
            className=" text-gray-700 uppercase font-bold"
            >Email Propietarios</label>
            <input 
                id="email"
                type="email"
                placeholder="Email del Propietarios"
                className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div>
            <label 
            htmlFor="fecha"
            className=" text-gray-700 uppercase font-bold"
            >Fecha Alta</label>
            <input 
                id="fecha"
                type="date"
                className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div>
            <label 
            htmlFor="sintomas"
            className=" text-gray-700 uppercase font-bold"
            >Sintomas</label>
            <textarea 
                id="sintomas"
                placeholder="Descripcion de los sintomas"
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