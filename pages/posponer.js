import Link from "next/link";
import IconButton from "../components/icon-button";
import NavBar from "../components/nav-bar";
import Image from 'next/image'
import { useEffect, useState } from "react";

var numMes = 1;
var fecha = 20;
var numDia = 10;
var listMes = ["Enero", "Febreo", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",]
var listDias = ["Lun", "Mar", "Mie", "Jue", "Vie", "Lun", "Mar", "Mie", "Jue", "Vie", "Lun", "Mar", "Mie", "Jue", "Vie", "Lun", "Mar", "Mie", "Jue", "Vie", "Lun", "Mar", "Mie", "Jue", "Vie"]
var listDias2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]

const Posponer = () => {

    const [h1, seth1] = useState(" ");
    const [h2, seth2] = useState(" ");
    const [h3, seth3] = useState(" ");
    const [h4, seth4] = useState(" ");
    const [h5, seth5] = useState(" ");
    const [h6, seth6] = useState(" ");
    const [h7, seth7] = useState(" ");
    const [h8, seth8] = useState(" ");
    const [h9, seth9] = useState(" ");
    const [h10, seth10] = useState(" ");
    const [h11, seth11] = useState(" ");
    const [h12, seth12] = useState(" ");

    const [mesCorte, setMesCorte] = useState("0");
    const [diaCorte, setDiaCorte] = useState("0");
    const [hora, setHora] = useState("0");
    const [hora2, setHora2] = useState("0");
    var d
    var h
    var m


    useEffect(() => {

        h = localStorage.getItem("h1");
        setHora(h);
        console.log("informacion de local ", h);
        d = localStorage.getItem("d1");
        setDiaCorte(d);
        console.log("informacion de local ", d);
        m = localStorage.getItem("m1");
        setMesCorte(m);
        console.log("informacion de local ", m);
        if (h == "8:30 am") seth1("none");
        if (h == "9:00 am") seth2("none");
        if (h == "9:30 am") seth3("none");
        if (h == "10:30 am") seth4("none");
        if (h == "11:00 am") seth5("none");
        if (h == "11:30 am") seth6("none");
        if (h == "13:00 pm") seth7("none");
        if (h == "13:30 pm") seth8("none");
        if (h == "14:00 pm") seth9("none");
        if (h == "14:30 pm") seth10("none");
        if (h == "16:00 pm") seth11("none");
        if (h == "16:30 pm") seth12("none");

    });



    return (
        <>
            <div className="main-container">
                <NavBar />



                <div className="ale2" id="vent2">
                    <div onClick={() => {
                        document.getElementById("vent2").style.display = "none";
                        localStorage.setItem("h1", hora2);
                    }} className="cerrarIcono2" id="cerrar2">

                        <Link href={"/home"}><h5 style={{ color: "#fff" }}>Aceptar</h5></Link>
                    </div>
                    <div onClick={() => {
                        document.getElementById("vent2").style.display = "none";
                        document.getElementById("men").style.opacity = '1'
                        document.getElementById("men2").style.opacity = '1'
                        document.getElementById("fondo1").style.opacity = '1'

                    }} className="cerrarIcono3" id="cerrar2">

                        <h5 style={{ color: "#fff" }}>Cancelar</h5>
                    </div>

                    <span className="modificado">

                        Se modificara el horario de turno, el nuevo horario  sera a las {hora2}
                        <><br /></> Si  esta de acuerdo confirme.</span>
                </div>

                <div className="content">
                </div>
                <div className='content-body' >
                    <div className='body'>
                        <div className="contentTitulo">
                            <span className="titulo"> </span>
                        </div>

                        <div className="contentPeluquero" id="men">
                            <span className="parrafo">Su turno se fijo para el dia {diaCorte} de {mesCorte} 2023 a las {hora}.</span>

                        </div>
                        <div className="contentMeses" >

                        </div>

                        <div className="contentDias">
                            <span id="men2" className="tituloPosponer">Posponer</span>
                        </div>

                        <div id="fondo" className="contentHorarios">
                            <h5>Horarios Disponibles</h5>
                            <div className="contentHoras">
                                <div className="botonFila1">
                                    <button style={{ display: h1 }} onClick={() => { setHora2("8:30 am") }} type="button" className="boton1" >8:30</button>
                                    <button style={{ display: h2 }} onClick={() => { setHora2("9:00 am") }} type="button" className="boton1" >9:00</button>
                                    <button style={{ display: h3 }} onClick={() => { setHora2("9:30 am") }} type="button" className="boton1" >9:30</button>
                                    <button style={{ display: h4 }} onClick={() => { setHora2("10:30 am") }} type="button" className="boton1" >10:30</button>
                                </div>
                                <div className="botonFila2">
                                    <button style={{ display: h5 }} onClick={() => { setHora2("11:00 am") }} type="button" className="boton2" >11:00</button>
                                    <button style={{ display: h6 }} onClick={() => { setHora2("11:30 am") }} type="button" className="boton2" >11:30</button>
                                    <button style={{ display: h7 }} onClick={() => { setHora2("13:00 pm") }} type="button" className="boton2" >13:00</button>
                                    <button style={{ display: h8 }} onClick={() => { setHora2("13:30 pm") }} type="button" className="boton2" >13:30</button>
                                </div>
                                <div className="botonFila2">
                                    <button style={{ display: h9 }} onClick={() => { setHora2("14:00 pm") }} type="button" className="boton2" >14:00</button>
                                    <button style={{ display: h10 }} onClick={() => { setHora2("14:30 pm") }} type="button" className="boton2" >14:30</button>
                                    <button style={{ display: h11 }} onClick={() => { setHora2("16:00 pm") }} type="button" className="boton2" >16:00</button>
                                    <button style={{ display: h12 }} onClick={() => { setHora2("16:30 pm") }} type="button" className="boton2" >16:30</button>
                                </div>
                            </div>

                        </div>
                        <div id="fondo1" className="botones">
                            <Link href={"/home"}>
                                <button type="button" className="boton"  >Cancelar</button>
                            </Link>

                            <button onClick={(e) => {
                                if (hora2 != "0") {
                                    document.getElementById("men").style.opacity = '.6'
                                    document.getElementById("men2").style.opacity = '.6'
                                    document.getElementById("fondo1").style.opacity = '.6'
                                    document.getElementById("vent2").style.display = "block";
                                }


                            }} type="button" className="boton">Modificar</button>

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
          margin-top: 15px;
          border-style: solid;
          border-width: 1px;
          height: 24%;
          background: #FFBD14;
          color:#000;
          padding:10px
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
          width:80%;
          color:#000;
          text-align: center;
          padding: 10px;
          padding-Top:17px;
          min-height: 185px;
          border-radius: 2px;
          position: absolute;
          top: 53%;
          left: 10%;
          display:none;
        }
        .cerrarIcono2{
          position: absolute;
          background: #0066FF;
          border-radius: 22px;
          padding: 4px 17px;
          left: 53%;
          top: 65%;
        }
        .cerrarIcono3{
          position: absolute;
          background: #0066FF;
          border-radius: 22px;
          padding: 4px 17px;
          left: 10%;
          top: 65%;
        }
        .tituloPosponer{
            font-weight: 700;
            font-size: 25px;
        }
        .parrafo{
            font-size:20px;
        }
        .modificado{
            font-size:17px;
        }

      `}</style>
        </>
    )
}

export default Posponer;