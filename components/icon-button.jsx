import Image from "next/image";

const IconButton = ({path, label, ...rest}) =>{
    return (
        <>
            <div className="box" {...rest}>
                <div className="icon">
                    <Image src={path} alt='Imagen' priority={true} width={85} height={85}></Image>
                </div>
                <span className="text-center">{label}</span>
            </div>
            <style jsx>{`
                .icon {
                    background: #f4d78b;
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .box {
                    display: flex;
                    flex-direction: column;
                    width:80px;
                    height:auto;
                }
            `}</style>
        </>
    )
}

export default IconButton;