import './estilo.css'

export default function Topo(){
    return(
        <header>
            <div className="limitar">
             <img src="assets/logo.png" alt='Óticas Vida' />

             <nav>
                <a href="#Produtos">PRODUTOS</a>
                <a href="#Sobre">SOBRE</a>
                <a href="#Contato">CONTATO</a>
             </nav>
                
            </div>
        </header>
    )
}