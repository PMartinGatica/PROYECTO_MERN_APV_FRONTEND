import { Link } from "react-router-dom"
const Registrar = () => {
    return (
      <>
      <main>
      <div> 
          <h1 className=" text-indigo-600 font-black text-6xl">Crea tu cuenta y Administra tus{" "} <span className=" text-black">Pacientes </span></h1>
      </div>
      <div className=" mt-20 md:mt-5 shadow-xl px-5 py-10 rounded-xl bg-white ">
          <form action="">
            <div className="my-5">
              <label htmlFor="" className=" uppercase text-gray-600 block text-xl font-bold">Nombre Usuario
              </label>
                <input 
                type="text"
                placeholder="Su nombre de usuario"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" />
            </div>
            <div className="my-5">
              <label htmlFor="" className=" uppercase text-gray-600 block text-xl font-bold">Email
              </label>
                <input 
                type="email"
                placeholder="Email de registro"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" />
            </div>
            <div className="my-5">
              <label htmlFor="" className=" uppercase text-gray-600 block text-xl font-bold">Password
              </label>
                <input 
                type="text"
                placeholder="Coloque su contraseña"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" />
            </div>
            <div className="my-5">
              <label htmlFor="" className=" uppercase text-gray-600 block text-xl font-bold">Repetir Email
              </label>
                <input 
                type="text"
                placeholder="Coloque nuevamente su contraseña"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" />
            </div>
            <input 
            type="submit"
            value="REGISTRARSE"
            className=" bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto" />
          </form>

          <nav className=" mt-10 lg:flex lg:justify-between">
            <Link className="block text-center my-5 text-gray-500" to="/">¿Ya tienes una cuenta? Inicia Sesión</Link>
            <Link className="block text-center my-5 text-gray-500" to="/olvide-password">Olvide mi password</Link>
          </nav>
      </div>
      
      </main>
      </>
    )
  }
  
  export default Registrar