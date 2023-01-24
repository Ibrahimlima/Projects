import './estilo.css'


export default function Empresa(){
    return(

        <section className='secao-empresa'>
            <div className='limitar-secao secao-sobre'>
                <h2>Quem Somos Nós?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas Vida iniciou suas atividades 
                   focadas no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar
                   ao cliente bom atendimento, qualidade e preço baixo. 
                </p>
                <div className='box-cards'>
                    <img src="assets/loja.png" />
                    <div className='box'>
                        <h3>Nossas Filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className='box'>
                        <h3>Atendimento Flexivel</h3>
                        <p>Nossa equipe é treinada para te atender cada vez melhor</p>
                    </div>
                    <img src="assets/atendimento.png" />
                    
                </div>
            </div>
        </section>
    )
}