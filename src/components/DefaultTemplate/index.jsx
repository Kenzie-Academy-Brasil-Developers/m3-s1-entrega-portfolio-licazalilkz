import { Footer } from "../Footer"
import { Header } from "../Header"

export const DefaultTemplate = ({children}) => {
    return(
        <main className="main__body">
            <Header/>
            {children}
            <Footer/>
        </main>
    )
}