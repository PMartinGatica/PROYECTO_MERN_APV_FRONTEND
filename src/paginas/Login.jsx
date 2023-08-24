import { Link } from "react-router-dom"
// import useAuth from "../hooks/useAuth"
import { useState } from "react";
import clienteAxios from "../config/axios";
import Alerta from "../components/alerta";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";



export const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});
  const navigate = useNavigate()

  const {setaAuth} = useAuth()
 
  const handleSubmit = async (e) =>{
    e.preventDefault()
    if([email,password].includes('')){
      setAlerta({msg: 'Hay campos vacios', error: true})
      return
    }
    console.log('despues del if')

  if(password.length < 6){
    setAlerta({msg: 'el password es muy corto, mas de 6 caracteres tiene que tener', error: true})
    return
  }
  setAlerta({})

  //Crear Usuario en la API
  try {
    const {data} = await clienteAxios.post('/veterinarios/login',{email,password})
    localStorage.setItem ('token', data.token)
    setaAuth(data)
    navigate('/admin')
  } catch (error) {
    setAlerta({
      msg: error.response.data.msg,
      error:true
    })
  }

}

  const {msg} = alerta

  // const {auth} = useAuth()

  return (
    <>
    <main>
        <div>
          <h1 className=" text-indigo-600 font-black text-6xl">Inicia Sesión y Administra tus {" "} <span className=" text-black">Pacientes </span></h1>
        </div>
        <div className=" mt-20 md:mt-5 shadow-xl px-5 py-10 rounded-xl bg-white ">

        {msg && <Alerta
        alerta = {alerta}
        />}
          <form action=""
          onSubmit={handleSubmit}
          >
            <div className="my-5">
              <label htmlFor="" className=" uppercase text-gray-600 block text-xl font-bold">Email
              </label>
                <input
                type="email"
                placeholder="Email de registro"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="my-5">
              <label htmlFor="" className=" uppercase text-gray-600 block text-xl font-bold">Password
              </label>
                <input
                type="password"
                placeholder="Tu Contraseña"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </div>

            <input
            type="submit"
            value="Iniciar Sesion"
            className=" bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto" />
          </form>
          <nav className=" mt-10 lg:flex lg:justify-between">
            <Link className="block text-center my-5 text-gray-500" to="/registrar">¿No tienes una cuenta? Registrate</Link>
            <Link className="block text-center my-5 text-gray-500" to="/olvide-password">Olvide mi password</Link>
          </nav>
        </div>
    </main>
    </>
  )
}

export default Login
