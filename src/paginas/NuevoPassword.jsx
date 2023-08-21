import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import clienteAxios from "../config/axios";
import Alerta from "../components/alerta";
import { Link } from "react-router-dom";

const NuevoPassword = () => {
  const [password, setPassword] = useState("");

  const [alerta, setAlerta] = useState({});

  const params = useParams();
  const [tokenValido, setTokenValido] = useState(false);
  const [passwordModificado, setPasswordModificado] = useState(false);


  const { token } = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/veterinarios/olvide-password/${token}`);
        setAlerta({
          msg: "Coloca tu nuevo Password",
        });
        setTokenValido(true);
      } catch (error) {
        setAlerta({
          msg: "Hubo un error con el enlace",
          error: true,
        });
      }
    };
    comprobarToken();
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setAlerta({
        msg: "El password debe tener minimamente 6 caracteres",
        error: true,
      });
      return;
    }
    try {
      const url = `/veterinarios/olvide-password/${token}`;
      const { data } = await clienteAxios.post(url, { password });
      console.log(data);

      setAlerta({
        msg: data.msg,
      });
      setPasswordModificado(true)

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div>
        <h1 className=" text-indigo-600 font-black text-6xl">
          Restablece tu password y no pierdas acceso a tus{" "}
          <span className=" text-black"> Pacientes </span>
        </h1>
      </div>
      <div className=" mt-20 md:mt-5 shadow-xl px-5 py-10 rounded-xl bg-white ">
        {msg && <Alerta alerta={alerta} />}

        {tokenValido && (
          <form onSubmit={handlesubmit}>
            <div className="my-5">
              <label
                htmlFor=""
                className=" uppercase text-gray-600 block text-xl font-bold"
              >
                Nuevo Password
              </label>
              <input
                type="password"
                placeholder="Tu nuevo Password"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <input
              type="submit"
              value="Guardar nuevo Password"
              className=" bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
            />
          </form>
        )}
        {passwordModificado && <Link className="block text-center my-5 text-gray-500" to="/">
            Inicia Sesión
          </Link>}
                  
        
      </div>
    </>
  );
};

export default NuevoPassword;
