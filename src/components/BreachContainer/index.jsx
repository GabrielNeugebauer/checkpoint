import './styles.css'

export default function BreachContainer({ email }) {
    const sortedEmail = email
        ? email.slice().sort((a, b) => new Date(b.BreachDate) - new Date(a.BreachDate))
        : [];
    const dataClassesPT = {
        "Email addresses": "Endereços de e-mail",
        "Passwords": "Senhas",
        "Password hints": "Dicas de senha",
        "Usernames": "Nome de usuário",
        "Names": "Nome completo",
        "Phone numbers": "Números de telefone",
        "Physical addresses": "Endereços físicos",
        "Geographic locations": "Localização geográfica",
        "Dates of birth": "Data de nascimento",
        "IP addresses": "Endereços IP",
        "Genders": "Gênero",
        "Website activity": "Atividade no site",
        "Purchases": "Compras",
        "Job titles": "Cargos",
        "Partial credit card data": "Dados parciais do cartão de crédito",
    };
    return (
        <div className="breach-container">
            <ul className='email-breach-list'>
                {sortedEmail.length > 0 ? sortedEmail.map((item, index) => (
                    <li key={index} className='email-breach-item'>
                        <div className='email-breach-item-content'>
                            <img src={item.LogoPath} alt={`${item.Title} logo`} className='breach-logo' />
                            <div className='breach-details'>
                                <h2>{item.Title}</h2>
                                <p><strong>Data do vazamento:</strong> {item.BreachDate}</p>
                                <p><strong>Número de contas afetadas:</strong> {item.PwnCount.toLocaleString('pt-BR')}</p>
                                <p><strong>Dados comprometidos:</strong> {item.DataClasses.slice().sort((a, b) => {
                                    const aPT = dataClassesPT[a] || a;
                                    const bPT = dataClassesPT[b] || b;
                                    return aPT.localeCompare(bPT, 'pt-BR');
                                }).map(dc => dataClassesPT[dc] || dc).join(', ')}</p>
                            </div>
                        </div>
                    </li>
                )) : <p>Nenhum vazamento encontrado para este e-mail.</p>}
            </ul>
        </div>
    )
}