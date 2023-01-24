import './estilo.css'


export default function Produtos(){
    return(

        <section id='produtos' className='secao-produtos'>
            <div className='limitar'>
                <h2>NOSSOS PRODUTOS</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminilo e infantil</p>
                <p>Todos os nossos preços são acessiveis e contam com a melhor qualidade do mercado</p>
                <div className='container-produtos'>
                    <div className='cards'>
                        <h3>Óculos de Grau</h3>
                        <img src="assets/oculos01.png" />
                        <p>R$ 500,00</p>
                    </div>
                    <div className='cards'>
                        <h3>Óculos Transition</h3>
                        <img src="assets/oculos02.png" />
                        <p>R$ 750,00</p>
                    </div>
                    <div className='cards'>
                        <h3>Óculos de Sol</h3>
                        <img src="assets/oculos03.png" />
                        <p>R$ 700,00</p>
                    </div>
                    <div className='cards'>
                        <h3>Óculos Infantil</h3>
                        <img src="assets/oculos04.png" />
                        <p>R$ 500,00</p>
                    </div>
                </div>

                <p>Todos os nossos produtos incluem:</p>

                <ul>
                    <li>Garantia de <span>1 ano</span></li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>

        </section>
    )
}