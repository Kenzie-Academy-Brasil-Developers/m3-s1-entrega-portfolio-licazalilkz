import styles from "./style.module.css"

export  const AboutMe = () => {
    return(
        <div className="container">
            <div className={styles.flexBox}>
                <div className={styles.flexAboutMe}>
                    <h1 className="title two">Sobre mim</h1>
                </div>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Proin ex magna, imperdiet sodales sem quis, sollicitudin 
                    lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. 
                    Nunc id felis pharetra, vehicula enim in, suscipit nisi. 
                    Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. 
                    Duis ac iaculis turpis, at feugiat orci.</p>
            </div>
        </div>
    )
}