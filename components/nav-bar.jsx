import { AiOutlineBell, AiOutlineInfoCircle } from 'react-icons/ai'
import { SlUser } from 'react-icons/sl'
import { GoKebabVertical } from 'react-icons/go'
import Link from 'next/link'

const NavBar = () => {
    return (
        <>
            <nav  className='nav-bar'>
                <div   id='misTurnos' className="ale4">
                    <div  onClick={()=>{
                        document.getElementById("misTurnos2").style.display = "block";
                    }} className='separador'>
                    <span className='turnos'>{"<"} Mis Turnos</span>
                    </div>
                    <div className='separador'>
                        ...
                    </div>


                </div>
                <div id='misTurnos2' className="ale5">
                    <div  onClick={()=>{
                        document.getElementById("misTurnos").style.display = "none";
                        document.getElementById("misTurnos2").style.display = "none";

                    }} className='separador'>
                      <Link href={"/posponer"}><span className='turnos'>.Posponer</span>
                   </Link>
                     </div>
                    <div className='separador'>
                    <span className='turnos'>.cancelar</span>
                    </div>


                </div>

                <span onClick={()=>{
                        document.getElementById("misTurnos").style.display = "none";
                        document.getElementById("misTurnos2").style.display = "none";

                    }}>ChehApp</span>

                <div className='icons-container'>
                    <span><AiOutlineInfoCircle size={25} /></span>
                    <span><AiOutlineBell size={25} /></span>
                    <span><SlUser size={22} /></span>
                    <div onClick={() => {
                        document.getElementById("misTurnos").style.display = "block";
                    }}>
                    <span className='opciones'><GoKebabVertical size={24} /></span>
                    </div>


                </div>
            </nav>
            <style jsx>{`
                .nav-bar {
                    font-weight: 500;
                    height: 45px;
                    background: none;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-family: 'Croissant One', cursive;
                    padding: 0 20px;
                    box-shadow: 0 0 5px 2px #13888f;
                }
                .icons-container {
                    display: flex;
                    gap: 15px;
                    padding-bottom: 2;
                }.opciones:hover{
                    color:#000;
                }
                .turnos{
                    font-size:22;
                }
                .separador{

                    border-color:#000;
                    border-style: solid;
                    border-width: 1px;
                    padding:1.5px 0px;
                }
                .ale4{
                    background: #FFBD14;
                    z-index:100;
                    width:33%;
                    color:#000;
                    text-align: center;
                    padding: 2px;
                    padding-Top:3px;
                    min-height: 50px;
                    border-radius: 0px;
                    position: absolute;
                    top: 2%;
                    left: 57%;
                    display:none;
                }
                .ale5{
                    background: #FFBD14;
                    z-index:101;
                    width:33%;
                    color:#000;
                    text-align: center;
                    padding: 2px;
                    padding-Top:3px;
                    min-height: 50px;
                    border-radius: 0px;
                    position: absolute;
                    top: 0%;
                    left: 25%;
                    display:none;


                }
            `}</style>

        </>
    )
}
export default NavBar;