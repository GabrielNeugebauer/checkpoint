import SearchBar from '../SearchBar'
import BreachContainer from '../BreachContainer'
import { useState } from 'react'

export default function EmailModule() {
  const [email, setEmail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rodou, setRodou] = useState(false);

  async function onSearch(inputEmail) {
    if (!inputEmail) return;
    setRodou(true);
    try {
      setLoading(true); // Inicia o carregamento
      if (!inputEmail.includes('@')) {
        throw new Error('Invalid email format');
      }
      const response = await fetch(`https://corsproxy.io/?https://haveibeenpwned.com/unifiedsearch/${inputEmail}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setEmail(data.Breaches || []);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setEmail([]);
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  }

  return (
    <div className='content'>
      <div className='module'>
        <div className="title-section">
          <h1>Checagem de e-mail</h1>
          <span>&ensp;&ensp;&ensp;Verifique se o seu e-mail foi exposto em algum vazamento de dados.</span>
          <br />
          <span>&ensp;&ensp;&ensp;Fonte dos dados: Have I Been Pwned</span>
        </div>
        <SearchBar termo="e-mail" onSearch={onSearch} />
        <br />
        {loading && <div className="loading">Carregando...</div>}
        {!loading && rodou && <BreachContainer email={email} />}
        
      </div>
      <div className='info'>
        <span className='info-title'>Meu e-mail foi vazado. E agora?</span>
        <br />
        <br />
        <p>Se o seu e-mail foi exposto em um vazamento de dados, é importante tomar algumas medidas para proteger sua conta e informações pessoais. Aqui estão algumas ações recomendadas:</p>
        <br />
        <ul className='info-list'>
          <li>Altere sua senha imediatamente: Se você descobrir que seu e-mail foi comprometido, altere a senha da conta afetada e de qualquer outra conta que use a mesma senha.</li>
          <li>Habilite a autenticação de dois fatores (2FA) sempre que possível: Adicione uma camada extra de segurança à sua conta ativando a autenticação de dois fatores, se disponível.</li>
          <li>Verifique suas contas: Monitore suas contas de e-mail e outras contas online para atividades suspeitas ou não autorizadas.</li>
          <li>Cuidado com phishing: Esteja atento a e-mails ou mensagens suspeitas que tentam enganá-lo para obter informações pessoais ou financeiras.</li>
          <li>Atualize suas informações de segurança: Certifique-se de que suas informações de recuperação de conta, como número de telefone e e-mail alternativo, estejam atualizadas.</li>
          <li>Use um gerenciador de senhas: Considere usar um gerenciador de senhas para criar e armazenar senhas fortes e únicas para cada uma de suas contas.</li>
          <li>Monitore seu crédito: Se o vazamento envolveu informações financeiras, considere monitorar seu relatório de crédito para detectar atividades suspeitas.</li>
        </ul>
        <br />
        <p>Lembre-se de que a segurança online é uma responsabilidade contínua. Mantenha-se informado sobre as melhores práticas de segurança e esteja sempre vigilante em relação às suas contas e informações pessoais.</p>
      </div>
    </div>
  );
}