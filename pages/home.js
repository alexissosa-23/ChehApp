import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import IconButton from '../components/icon-button'
import NavBar from '../components/nav-bar'


export default function Home() {
  var router = useRouter();


  return (
    <>
      <div className='main-container'>
        <Head>
          <title>ChehApp</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar/>

        <div className='content'>
          <div className='content-header'>
            <div className='d-flex justify-content-between'>
              <Image src='/local.png' alt='Imagen de local' priority={true} width={35} height={40}></Image>
              <div className='d-flex flex-column'>
                <span>Peluquería y Estética</span>
                <span className='text-center'>"J & A"</span>
              </div>
              <Image src='/peine.png' alt='Imagen de tijeras' priority={true} width={40} height={40}></Image>
            </div>
            <div className='d-flex justify-content-center py-2'>
              <div className='logo'>
                <Image src='/logo.png' alt='Imagen logo' priority={true} width={60} height={60}></Image>
              </div>
            </div>
            <div className='d-flex flex-column'>
              <span className='text-center'>Horario de Atención</span>
              <span className='text-center'>Lunes a Viernes:  8:00hs a 18:00hs.</span>
              <span className='text-center'>Tel: 0724-20506     Cel: 0985-264876</span>
            </div>
          </div>
          <div className='content-body'>
            <h1>Servicios</h1>
            <div className='servis-conteiner'>

              <Link href='/corte'>
                <IconButton path='/corte.png' label="Corte" />
              </Link>
              <IconButton path='/peinado.png' label="Peinado" />
              <IconButton path='/pintura.png' label="Pintura" />
              <IconButton path='/moldeado.png' label="Moldeado" />
              <IconButton path='/rasurado.png' label="Rasurado" />
              <IconButton path='/enjuague.png' label="Enjuague" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .content {
          padding: 20px;
          background: #ff456;
        }
        .content > div {
          background: white;
          position: relative;
        }
        .content-header {
          box-shadow: 1px 2px 3px 2px #aaaa;
          background: lime;
          z-index: 30;
          font-family: 'Croissant One', cursive;
          padding: 10px 20px;
        }
        .content-body {
          z-index: 20;
          font-family: 'Roboto', sans-serif;
          padding: 20px;
          height: 100%;
          padding-bottom: 6rem;
        }
        .logo {
          background: #adfaff;
          border-radius: 50%;
          padding: 20px 60px;
          box-shadow: 0px 2px 3px 2px #aaaa;
        }
        .servis-conteiner {
          width: 100%;
          display: grid;
          gap: 10px;
          grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));

        }

      `}</style>
    </>
  )
}