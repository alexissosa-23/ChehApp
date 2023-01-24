import NavBar from "../components/nav-bar";
import Link from 'next/link'
import { useEffect, useState } from "react";
import IconButton from "../components/icon-button";
import Image from "next/image";
const Notificacion = () => {

    const [titulo1, setTitulo1] = useState("");
    const [mensaje1, setMensaje1] = useState("");
    const [fecha1, setFecha1] = useState("");
    const [hora1, setHora1] = useState("");
    const [titulo2, setTitulo2] = useState("");
    const [mensaje2, setMensaje2] = useState("");
    const [fecha2, setFecha2] = useState("");
    const [hora2, setHora2] = useState("");
    const [titulo3, setTitulo3] = useState("");
    const [mensaje3, setMensaje3] = useState("");
    const [fecha3, setFecha3] = useState("");
    const [hora3, setHora3] = useState("");

    useEffect(() => {
        localStorage.setItem("t1", "Local cerrado por hoy");
        setTitulo1("Local cerrado por hoy")
        localStorage.setItem("m1", "Por cuestiones personales hoy no estaré atendiendo en el local, los turnos para hoy pasan para mañana. En caso de que haya incovenientes para algunas, recordar que pueden reagendar en el horario mas conveniente para ustedes");
        setMensaje1("Por cuestiones personales hoy no estaré atendiendo en el local, los turnos para hoy pasan para mañana. En caso de que haya incovenientes para algunas, recordar que pueden reagendar en el horario mas conveniente para ustedes")
        localStorage.setItem("f1", "Vie 3, MAYO 2022");
        setFecha1("Vie 3, MAYO 2022");
        localStorage.setItem("ho1", "9:29 AM");
        setHora1("9:29 AM");
        localStorage.setItem("t2", "Local cerrado por hoy");
        setTitulo2("Local cerrado por hoy")
        localStorage.setItem("m2", "Por cuestiones personales hoy no estaré atendiendo en el local, los turnos para hoy pasan para mañana. En caso de que haya incovenientes para algunas, recordar que pueden reagendar en el horario mas conveniente para ustedes");
        setMensaje2("Por cuestiones personales hoy no estaré atendiendo en el local, los turnos para hoy pasan para mañana. En caso de que haya incovenientes para algunas, recordar que pueden reagendar en el horario mas conveniente para ustedes")
        localStorage.setItem("f2", "Vie 3, MAYO 2022");
        setFecha2("Jue 5, JUNIO 2022");
        localStorage.setItem("ho2", "9:29 AM");
        setHora2("8:00 AM");
        console.log("sdfghjkl");
        if(titulo3==""){
            document.getElementById("newNotificacion").style.display="none"
        }else{
            document.getElementById("newNotificacion").style.display="block"

        }

    })
    return (
        <>
            <div className="main-container">

                <NavBar />
                <div id="cont1" className="contenedor">

                    <h6>Agregar Notificacion</h6>

                    <form >
                        <label>
                            <input id="tituloInp" className="titulo-container" type="text" name="name3" placeholder="Agregar titulo aqui..." />
                        </label>
                    </form>

                    <form >
                        <label>
                            <input id="descripcionInp" className="descripcion-container" type="textarea" name="name" placeholder="Agregar descripcion aqui..." />
                        </label>
                    </form>
                    <Link href='/home2'>
                        <input className="boton-cancelar" type="submit" value="Cancelar" />
                    </Link>

                        <input onClick={()=>{

                            setTitulo3(document.getElementById("tituloInp").value);
                            setFecha3("Lun 23, ENERO 2023");
                            setHora3("19:30PM")
                            document.getElementById("cont1").style.display="none";
                            document.getElementById("cont2").style.display="block";

                        }} className="boton-guardar" type="submit" value="Guardar" />


                </div>

                <div id="cont2" className="contenedor2">



                    <form >
                        <div className="titulo-container2">
                            <div className="opciones">
                                <Image className="el" alt="cerrar sesion" src={'/eliminar.png'} width={25} height={25} />
                                <Image className="editar" alt="cerrar sesion" src={'/editar.png'} width={25} height={25} />
                            </div>
                            <samp >Titulo:</samp>
                            <span className="titulof1">{titulo1}</span>


                            <div className="hora">
                                <samp>{fecha1}</samp>
                            </div>

                            <div className="hora2" >
                                <samp  >{hora1}</samp>
                            </div>

                        </div>
                    </form>
                    <form >
                        <div className="titulo-container2">
                            <div className="opciones">
                                <Image className="el" alt="cerrar sesion" src={'/eliminar.png'} width={25} height={25} />
                                <Image className="editar" alt="cerrar sesion" src={'/editar.png'} width={25} height={25} />
                            </div>
                            <samp >Titulo:</samp>
                            <span className="titulof1">{titulo2}</span>


                            <div className="hora">
                                <samp>{fecha2}</samp>
                            </div>

                            <div className="hora2" >
                                <samp  >{hora2}</samp>
                            </div>

                        </div>
                    </form>
                    <form >
                        <div id="newNotificacion" className="titulo-container2">
                            <div className="opciones">
                                <Image className="el" alt="cerrar sesion" src={'/eliminar.png'} width={25} height={25} />
                                <Image className="editar" alt="cerrar sesion" src={'/editar.png'} width={25} height={25} />
                            </div>
                            <samp >Titulo:</samp>
                            <span className="titulof1">{titulo3}</span>


                            <div className="hora">
                                <samp>{fecha3}</samp>
                            </div>

                            <div className="hora2" >
                                <samp  >{hora3}</samp>
                            </div>

                        </div>
                    </form>

                    <div className="contenedorBotones">
                        <Link href='/home2'>
                            <input className="boton-cancelar" type="submit" value="Atras" />
                        </Link>

                            <input onClick={()=>{
                                document.getElementById("cont1").style.display="block";
                                document.getElementById("cont2").style.display="none";
                            }} className="boton-guardar" type="submit" value="Agregar" />

                    </div>


                </div>

            </div>
            <style jsx>{`

                .contenedor {
                    background: #ffffff;
                    width: 97%;
                    height: 90%;
                    justify-content: center;
                    align-items: center;
                    padding: 30px;
                    margin: 5px;
                    text-align: center;
                    display:none;
                }
                .titulo {
                    background: #FFFFFF;
                    width: 99%;
                    height: 10%;
                    justify-content: center;
                    align-items: center;
                    margin: 5px;
                    text-align: center;

                }
                .descripcion {
                    background: #FFD133;
                    width: 99%;
                    height: 40%;
                    justify-content: center;
                    align-items: center;
                    padding: 30px;
                    margin: 5px;
                    text-align: center;
                }
                .titulo-container{
                    background: #FFD133;
                    width: 325px;
                    height: 50px;
                    justify-content: center;
                    align-items: center;
                    border-color: #FFD133;
                    text-align: center;

                }
                .descripcion-container{
                    background: #FFD133;
                    width: 325px;
                    height: 200px;
                    justify-content: center;
                    align-items: center;
                    border-color: #FFD133;
                    text-align: center;
                    margin-top:5px;

                }
                .boton-cancelar{
                    background: #0F8BF2;
                    width: 100px;
                    height: 20;
                    justify-content: center;
                    align-items: center;
                    border-color: #0F8BF2;
                    text-align: center;
                    margin:10px;
                    margin-top:150px;
                    margin-left:45px;
                }
                .boton-guardar{
                    background: #0F8BF2;
                    width: 100px;
                    height: 20;
                    justify-content: center;
                    align-items: center;
                    border-color: #0F8BF2;
                    text-align: center;
                }
                .contenedor2 {
                    background: #ffffff;
                    width: 97%;
                    height: 90%;
                    justify-content: center;
                    align-items: center;
                    padding: 30px;
                    margin: 5px;
                    text-align: center;


                }
                .titulo-container2{
                    background: #FFD133;
                    width: 325px;
                    height: 80px;
                    justify-content: center;
                    align-items: center;
                    border-color: #FFD133;
                    text-align: left;
                    margin-bottom:10px;
                    padding:0px;
                    padding-left: 5px;


                }
                .hora{
                    width:80%; display:inline-block;
                    padding:5px;
                }
                .hora2{
                    width:20%; display:inline-block;
                }
                .titulof1{
                    padding-left:15%;
                }

                .opciones{
                    padding:0px;
                    margin:0px;
                    text-align: right;
                }
                .contenedorBotones{
                    margin-top:10%;
                }


            `}</style>
        </>
    )
}

export default Notificacion;