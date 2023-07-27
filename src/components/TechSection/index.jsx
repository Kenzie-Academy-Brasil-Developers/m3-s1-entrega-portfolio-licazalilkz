import { technologies } from "../../data/technologies"
import styles from "./styles.module.css"

export const TechSection = () => {
    return(
        <div className="container">
            <h1 className="title two">Tecnologias</h1>
            <ul className={styles.flexBox}>
                {technologies.map(technology => {
                    return(
                        <li className="title three" key={technology.id}>
                            <div className={styles.liBox}>
                                <img src={technology.img} alt={technology.name} />
                                <h3 className="tile three">{technology.name}</h3>
                            </div>
                        </li>
                     )
                    })}
            </ul>
        </div>
    )
}