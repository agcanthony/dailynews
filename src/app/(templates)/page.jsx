import CardNoticia from "../models/card"

export const metadata = {
    title: "Exemplo de CRUD"
}
    
export default function Page() {
    return (
        <>  
            <br/>      
            <CardNoticia/>
        </>
    )
}