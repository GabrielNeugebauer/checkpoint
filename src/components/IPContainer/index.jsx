import './styles.css'

export default function IPContainer({ ip }) {
    const dataClassesPT = {
        "technical": "Técnico",
        "administrative": "Administrativo",
        "abuse": "Segurança",
        "registrant": "Registrante",
    };
    return (
        <div className="ip-info">
            <ul className='ip-entity-list'>
                {ip.length > 0 ? ip.map((item, index) => (
                    <li key={index} className='ip-entity-item'>
                        <div className='ip-entity-item-content'>
                            <h2>{item.vcardArray[1].find(v => v[0] === 'fn')[3]}</h2>
                            <p>
                                <strong>Cargo:</strong>{' '}
                                {item.roles
                                    .map(role => dataClassesPT[role] || role)
                                    .join(', ')
                                }
                            </p>
                            <p><strong>Data de Início:</strong> {item.startDate}</p>
                            <p><strong>Data de Término:</strong> {item.endDate || 'N/A'}</p>
                            <p><strong>Representante:</strong> {item.legalRepresentative || 'N/A'}</p>
                            <p>
                                <strong>Documento:</strong>{' '}
                                {item.publicIds && item.publicIds.length > 0
                                    ? item.publicIds.map(id => id.identifier).join(', ')
                                    : 'N/A'}
                            </p>
                            <p><strong>Emails:</strong> {item.vcardArray[1].filter(v => v[0] === 'email').map(e => e[3]).join(', ') || 'N/A'}</p>
                            <p><strong>Telefones:</strong> {item.vcardArray[1].filter(v => v[0] === 'tel').map(t => t[3]).join(', ') || 'N/A'}</p>
                        </div>
                    </li>
                )) : <p>Nenhuma informação encontrada para este IP.</p>}
            </ul>
        </div>
    )
}