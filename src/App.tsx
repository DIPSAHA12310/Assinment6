import { Suspense } from 'react'
import './App.css'
import Banner from './Componant/Banner'
import Nav from './Componant/nav'
import Language from './Componant/Language'
import type { Ilanguage } from './type/Language'
import Footer from './Componant/Footer'


const LanguageFetch = async (): Promise<Ilanguage[]> => {
    const res = await fetch("/data.json")
    const data = await res.json()
    return data
}

function App() {
    const languagePromies = LanguageFetch()

    return (
        <>
            <Nav></Nav>
            <Banner></Banner>

            <Suspense fallback="Loading">
                <Language languagePromies={languagePromies}></Language>
            </Suspense>

            <Footer></Footer>
        </>
    )
}

export default App