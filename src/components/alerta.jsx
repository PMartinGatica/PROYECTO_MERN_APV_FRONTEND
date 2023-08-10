
const Alerta = ({alerta}) => {
  return (
    <div
    className= {`${alerta.error? 'from-red-600 to-red-900' : 'from-green-700 to-green-950'} bg-gradient-to-br  text-center text-white text-lg rounded-xl p-3 font-bold uppercase`} 
    >{alerta.msg}</div>
  )
};

export default Alerta;