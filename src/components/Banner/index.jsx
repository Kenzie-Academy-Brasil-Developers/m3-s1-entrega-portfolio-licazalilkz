import { username } from "../../data/user"
import banner from "../../assets/banner-img.png"
import styles from "./style.module.css"

export const Banner = () => {
    return(
        <div className="container">
            <div className={styles.flexBox}>
                <div className={styles.flexBoxLeft}>
                    <a className="link">Olá {username}!</a>
                    <h1 className="title one">Bem vindo ao meu Portifolio</h1>
                    <p className="paragraph">Uma frase interesante sobre mim</p>
                    <button className="buttonPort">Saiba mais</button>
                </div>
                <img src={banner} alt="banner" />
            </div>
        </div>
    )
}