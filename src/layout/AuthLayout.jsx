import { Outlet } from "react-router-dom"
const AuthLayout = () => {
  return (
    <>

        <h1>Administrar Pacientes de Veterinario</h1>
        <main className="container mx-auto md:grid md:grid-cols-2 mt-12">
        <Outlet/>
        </main>
    </>
  )
}

export default AuthLayout