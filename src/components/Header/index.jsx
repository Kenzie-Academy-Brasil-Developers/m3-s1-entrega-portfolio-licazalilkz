import image from "../../assets/portfolio.png"
import styles from "./style.module.css"

export const Header = () => {
    return(
        <header className="container">
            <div className={styles.flexBox}>
                <img src={image}  alt="Portfolio" /> 
                <div className={styles.flexBoxMenu}>
                    <a className="paragraph" href="">Sobre</a>
                    <a className="paragraph" href="">Stack</a>
                    <a className="paragraph" href="">Projetos</a>
                </div>
                <button className="buttonPort">Contato</button>
            </div>
        </header>
    )
}