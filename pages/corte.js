import Link from "next/link";
import IconButton from "../components/icon-button";
import NavBar from "../components/nav-bar";
import Image from 'next/image'
import { useEffect, useState } from "react";

var numMes = 1;
var fecha = 20;
var numDia = 10;
var listMes = ["Enero", "Febreo", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",]
var listDias = ["Lun", "Mar", "Mie", "Jue", "Vie", "Lun" , "Mar", "Mie", "Jue", "Vie", "Lun", "Mar", "Mie", "Jue", "Vie", "Lun", "Mar", "Mie", "Jue", "Vie", "Lun", "Mar", "Mie", "Jue", "Vie"]
var listDias2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]

const Corte = () => {

  const [mes, setMes] = useState(listMes[numMes]);
  const [dia1, setDia1] = useState(listDias[9] + "\n");
  const [dia2, setDia2] = useState(listDias[10] + "\n");
  const [dia3, setDia3] = useState(listDias[11] + "\n");
  const [peluquero, setPeluquero] = useState("0");
  const [corte, setCorte] = useState("0");
  const [mesCorte, setMesCorte] = useState("0");
  const [diaCorte, setDiaCorte] = useState("0");
  const [hora, setHora] = useState("0");





  function mesSiguinet() {
    if ((numMes + 1) < 12) {
      numMes = numMes + 1;
      console.log("mes ", numMes);
      setMes(listMes[numMes]);
    }


  }
  function mesAnterior() {
    if ((numMes - 1) > -1) {
      numMes = numMes - 1;

      setMes(listMes[numMes]);
    }

  }
  function diaSiguinet() {
    if ((numDia + 2) < 25) {
      numDia = numDia + 1;
      setDia1(listDias[numDia - 1]);
      setDia2(listDias[numDia]);
      setDia3(listDias[numDia + 1]);
    }


  }
  function diaAnterior() {
    if ((numDia - 2) > -1) {
      numDia = numDia - 1;
      setDia1(listDias[numDia - 1]);
      setDia2(listDias[numDia]);
      setDia3(listDias[numDia + 1]);
    }

  }


  function reservar(p, c, h) {

    if ((p == "0") || (c == "0") || (h == "0")) {
      document.getElementById("vent2").style.display = "block";

      document.getElementById("fondo").style.opacity = '.2'
      document.getElementById("fondo1").style.opacity = '.2'

    } else {
      document.getElementById("vent").style.display = "block";
      document.getElementById("fondo").style.opacity = '.2'
      document.getElementById("fondo1").style.opacity = '.2'

      let d = listDias2[numDia];
      let m = listMes[numMes]
      /*var reserva = []
      var objeto = { p, c, h, d, m }
      reserva[0] = { p, c, h, d, m };
      */
     localStorage.setItem("p1", p);
     localStorage.setItem("c1", c);
     localStorage.setItem("h1", h);
     localStorage.setItem("d1", d);
     localStorage.setItem("m1", m);

    }
  }


  return (
    <>
      <div className="main-container">
        <NavBar />

        <div className="ale" id="vent">

          <div onClick={() => {
            document.getElementById("vent").style.display = "none";
            document.getElementById("fondo").style.opacity = '1'
            document.getElementById("fondo1").style.opacity = '1'
          }} className="cerrarIcono" id="cerrar">

            <Image alt="cerrar sesion" src={'/error.png'} width={35} height={35} />
          </div>


          <div className="cerrarIcono3" id="cerrar3">
            <Link href={"/home"} ><h3>OK</h3></Link>
          </div>

          <h5>Se ha registrado un turno. </h5>
          <h6>Peluquero: " {peluquero} "</h6>

          <h6>Corte: {corte}.</h6>
          <h6>Dia {listDias2[numDia]}</h6>
          <h6>Mes: {listMes[numMes]}</h6>
          <h6>año 2023 a las {hora}</h6>
        </div>

        <div className="ale2" id="vent2">
          <div onClick={() => {
            document.getElementById("vent2").style.display = "none";
            document.getElementById("fondo").style.opacity = '1'
            document.getElementById("fondo1").style.opacity = '1'
          }} className="cerrarIcono2" id="cerrar2">

            <h3>OK</h3>
          </div>
          <h6>Para poder registrar un turno rellene primero todos los campos!!!!</h6>
        </div>

        <div className="content">
        </div>
        <div className='content-body' >
          <div className='body'>
            <div className="contentTitulo">
              <span className="titulo">Corte</span>
            </div>

            <div className="contentPeluquero">
              <div className="perfil">

                <Image alt="perfil" className="imgPerfil"
                  src={'/perfil.png'}

                  width={100}
                  height={100}
                />
              </div>

              <div className="contentCorte">
                <div className="peluquero">
                  <span className="tituloPeluquero">Peluquero.</span>
                  <form className="fromPeluquero">
                    <select id="slcAutos" className="selectPeluquero" >
                      <option value={"0"}>Selecione Peluquero</option>
                      <option value={"Alexis Sosa"}>Alexis Sosa</option>
                      <option value={"Juan Benitez"}>Juan Benitez</option>
                      <option value={"Pepe Galeano"}>Pepe Galeano</option>
                    </select>
                  </form>
                </div>

                <div className="corte">
                  <span className="tituloCorte">Corte.</span>
                  <form className="fromPeluquero">
                    <select id="slcCorte" className="selectPeluquero" >
                      <option value={"0"}>Selecione Corte</option>
                      <option value={"Degradado Taper"}>Degradado Taper  35.000Gs</option>
                      <option>corte 2</option>
                      <option>cortr 3 </option>
                    </select>
                  </form>
                </div>


              </div>


            </div>
            <div className="contentMeses" >

              <Image alt="icono" className="me" onClick={(e) => { mesAnterior() }} src={'/flecha-izquierda.png'} width={30} height={30} />

              <span className="mes">{mes}.</span>
              <Image alt="icono" className="me" onClick={(e) => { mesSiguinet() }} src={'/flechas-derecha.png'} width={30} height={30} />

            </div>

            <div className="contentDias">

              <Image alt="cerrar sesion" onClick={(e) => {
                diaAnterior()
              }} src={'/flecha-izquierda.png'} width={30} height={30} />

              <span className="di">{dia1}.</span>
              <span className="di">{dia2}.</span>
              <span className="di">{dia3}.</span>
              <Image alt="cerrar sesion" onClick={(e) => {
                diaSiguinet()
              }} src={'/flechas-derecha.png'} width={30} height={30} />
            </div>

            <div id="fondo" className="contentHorarios">
              <h3>Horarios Disponibles</h3>
              <div className="contentHoras">
                <div className="botonFila1">
                  <button onClick={() => { setHora("8:30 am") }} type="button" className="boton1" >8:30</button>
                  <button onClick={() => { setHora("9:00 am") }} type="button" className="boton1" >9:00</button>
                  <button onClick={() => { setHora("9:30 am") }} type="button" className="boton1" >9:30</button>
                  <button onClick={() => { setHora("10:30 am") }} type="button" className="boton1" >10:30</button>
                </div>
                <div className="botonFila2">
                  <button onClick={() => { setHora("11:00 am") }} type="button" className="boton2" >11:00</button>
                  <button onClick={() => { setHora("11:30 am") }} type="button" className="boton2" >11:30</button>
                  <button onClick={() => { setHora("13:00 pm") }} type="button" className="boton2" >13:00</button>
                  <button onClick={() => { setHora("13:30 pm") }} type="button" className="boton2" >13:30</button>
                </div>
                <div className="botonFila2">
                  <button onClick={() => { setHora("14:00 pm") }} type="button" className="boton2" >14:00</button>
                  <button onClick={() => { setHora("14:30 pm") }} type="button" className="boton2" >14:30</button>
                  <button onClick={() => { setHora("16:00 pm") }} type="button" className="boton2" >16:00</button>
                  <button onClick={() => { setHora("16:30 pm") }} type="button" className="boton2" >16:30</button>
                </div>
              </div>

            </div>
            <div id="fondo1" className="botones">
              <Link href={"/home"}>
                <button type="button" className="boton"  >Cancelar</button>
              </Link>

              <button onClick={(e) => {

                var slcchange = document.getElementById("slcAutos");
                var slcCorte = document.getElementById("slcCorte");

                setPeluquero(slcchange.value);
                setCorte(slcCorte.value);
                reservar(slcchange.value, slcCorte.value, hora);


              }} type="button" className="boton">Reservar</button>

            </div>

          </div>

        </div>

      </div>
      <style jsx>{`
        .content {
          padding: 10px;


        }
        .content-body{
            background: #37DBE5;
            height: 85%;


        }
        .body {
          z-index: 20;
          font-family: 'Roboto', sans-serif;

          height: 100%;
          padding: 10px;
          padding-bottom: 6rem;
          background: white;
          margin: 20px;
        }
        .titulo {
          font-weight: 700;
          font-size: 23px;

        }
        .contentTitulo{
          text-align: center;
        }
        .contentPeluquero{
          border-style: solid;
          border-width: 1px;
          height: 24%;
        }
        .perfil {
          border-style: solid;
          border-width: 1px;
          height: 100%;
          width:30%;
          float: left;
          background: white;
          text-align: center;




        }
        .contentCorte {
          border-style: solid;
          border-width: 1px;
          height: 100%;
          width: 70%;
          float: right;
        }
        .peluquero{
          border-style: solid;
          border-width: 1px;
          height: 50%;
          text-align: center;
        }
        .corte{
          border-style: solid;
          border-width: 1px;
          height: 50%;
          text-align: center;
        }
        .fromPeluquero{
          text-align: center;
        }
        .selectPeluquero{
          width: 100%;
          height: 100%;

          text-align: center;

        }
        .tituloPeluquero{
          padding :0;
          text-align: center;
          font-weight: 700;
        }
        .tituloCorte{
          font-weight: 700;
        }
        .contentMeses{
          height: 10%;
          text-align: center;
          margin-top: 10px;

        }
        .contentDias{

          height: 10%;
          text-align: center;

        }
       .contentHorarios{

          height: 50%;

        }
        .contentHoras{
          background : #FFBD14;
          height:  80%;

        }
        .botones{

          text-align: center;
          padding-top: 20px

        }

        .boton{
          background-color: #0066FF;
          color: white;
          padding: 10px 25px;
          margin: 5px 15px;
          border: 2px solid #4CAF50;
          border-radius: 30px;
        }
        .boton:hover{
          background-color: #37DBE5;
          color: black;
        }
        .boton:visited{
          background-color: #37DBE5;
          color: black;
        }
        .botonFila1{
          text-align: center;
        }

        .boton1{
          background-color: white;
          color: ;
          padding: 0px 10px;
          margin: 12px 8px;
          border: 2px solid #4CAF50;
          border-radius: 30px;

        }
        .botonFila2{
          text-align: center;
        }

        .boton2{
          background-color: white;
          color: ;
          padding: 0px 10px;
          margin: 12px 5px;
          border: 2px solid #4CAF50;
          border-radius: 30px;

        }
        .boton2:hover{
          background-color: #37DBE5;
          color: black;
        }
        .boton1:hover{
          background-color: #37DBE5;
          color: black;
        }
        .mes{

          margin: 20px 20px;
          font-weight: 800;
          font-size: 20px;


        }
        .di{
          margin: 10px 10px;
          font-weight: 600;
          font-size: 18px;
        }
        .me{
          padding-top: 20;
          margin-top: 20;
        }
        .ale{
          background: #FFBD14;
          width:70%;
          color:#000;
          text-align: center;
          padding: 10px;
          padding-Top:35px;
          min-height: 260px;
          border-radius: 22px;
          position: absolute;
          top: 15%;
          left: 20%;
          display:none;
        }
        .cerrarIcono{
          position: absolute;
          right:3px;
          top:1px
        }
        .ale2{
          background: #FFBD14;
          width:70%;
          color:#000;
          text-align: center;
          padding: 10px;
          padding-Top:35px;
          min-height: 160px;
          border-radius: 22px;
          position: absolute;
          top: 30%;
          left: 20%;
          display:none;
        }
        .cerrarIcono2{
          position: absolute;
          background: #fff;
          border-radius: 22px;
          padding: 5px 25px;
          left: 35%;
          top: 65%;
        }
        .cerrarIcono3{
          position: absolute;
          background: #fff;
          border-radius: 22px;
          padding: 5px 25px;
          left: 35%;
          top: 80%;
        }

      `}</style>
    </>
  )
}

export default Corte;