import { projects } from "../../data/projects"
import styles from "./styles.module.css"

export const ProjectSection = () => {
    return(
        <div className="container">
            <h1 className="title one">Projetos</h1>
            <ul className={styles.ulBox}>
                {projects.map(project=>{
                    return(
                        <li key={project.name}>
                            <div className={styles.flexBox}>
                                <h2 className="title three">{project.name}</h2>
                                <p className="paragraph">{project.description}</p>
                                <a className="link" href="">Saiba mais</a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}