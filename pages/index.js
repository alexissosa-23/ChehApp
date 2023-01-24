import Link from "next/link";
import IconButton from "../components/icon-button";
import NavBar from "../components/nav-bar";
import Image from 'next/image'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const Login = () => {

    const router = useRouter();
    useEffect(()=>{
        localStorage.setItem('user2', "antonio");
    localStorage.setItem("contrasena2", "123456");
    localStorage.setItem('user1', "david");
    localStorage.setItem("contrasena1", "123456");
    })


    function iniciar(){
        var usu= document.getElementById("user").value;
        var cont=document.getElementById("password").value;

        let usuario1=localStorage.getItem("user1");
        let contrasena1=localStorage.getItem("contrasena1");
        let usuario2=localStorage.getItem("user2");
        let contrasena2=localStorage.getItem("contrasena2");
        if((usuario1==usu)&&(contrasena1==cont)){
            console.log("Usuario1", usuario1);
            console.log("Password1", contrasena1);
            router.push("/home2")
        }
        if ((usuario2==usu)&&(contrasena2==cont)){
            console.log("Usuario2", usuario2);
            console.log("Password2", contrasena2);
            router.push("/home")
        }
    }
    return (
        <>
            <div className="main-container">

                <div className="contenedor2">
                    <div className="contenedor">
                        <h1 className='name-app'>ChehApp</h1>

                        <form >
                            <label>
                                <input id='user' className="titulo-container" type="text" name="name3" placeholder="usuario" />
                            </label>
                        </form>

                        <form >
                            <label>
                                <input id='password'  className="titulo-container" type="text" name="name3" placeholder="contraseña" />
                            </label>
                        </form>
                        <div className="contenedorBoton">
                        <input onClick={() => {
                            iniciar();
                        }} className="boton-cancelar" type="submit" value="Iniciar Sesion" />


                        <input className="boton-guardar" type="submit" value="Registrarse" />

                        </div>
                    </div>
                </div>

            </div>
            <style jsx>{`
                 .main-container {
                    background: #FFFFFF;

                }
                .name-app {
                    font-family: 'Croissant One', cursive;

                }

                 .contenedor2 {
                    background: #37DBE5;
                    width: 92%;
                    height: 90%;
                    justify-content: center;
                    align-items: center;
                    padding: 30px;
                    margin: 15px;
                    text-align: center;
                }
                .contenedor {
                    background: #FFFFFF;
                    width: 100%;
                    height: 50%;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                    margin-top:80px;
                    text-align: center;
                }

                .titulo-container{
                    background: #FFFFFF;
                    width: 240px;
                    height: 40px;
                    justify-content: center;
                    align-items: center;
                    border-color: #37DBE5;
                    text-align: center;
                    margin: 5px;

                    font-family: 'Roboto', sans-serif;

                }
                .contenedorBoton{

                }

                .boton-cancelar{
                    background: #F4D78B;
                    width: 115px;
                    height: 35px;
                    border-color: #F4D78B;
                    text-align: center;
                    margin-top: 10px;
                    margin-right:10px;
                    font-family: 'Roboto', sans-serif;

                }
                .boton-guardar{
                    background: #F4D78B;
                    width: 115px;
                    height: 35px;
                    justify-content: center;
                    align-items: center;
                    border-color: #F4D78B;
                    text-align: center;
                    margin-top: 10px;
                    font-family: 'Roboto', sans-serif;

                }


            `}</style>
        </>
    )
}

export default Login;

