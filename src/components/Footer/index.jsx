import {user} from "../../data/user";
import whatsapp from "../../assets/whatsapp-icon.png"
import linkedin from "../../assets/linkedin-icon.png"
import github from "../../assets/github-icon.png"
import styles from "./styles.module.css"

export const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className={styles.flexBox}>
                    <div>
                        <h2 className="title two">Contato</h2>
                        <div className={styles.flexImg}>
                            <img src={whatsapp} alt="whatsapp" />
                            <img src={linkedin} alt="linkeed" />
                            <img src={github} alt="github" />
                        </div>
                    </div>
                    <p className="paragraph">Todos os direitos reservados - {user} </p>
                </div>
            </div>
        </footer>
    )
}