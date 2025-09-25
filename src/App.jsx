import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import EmailModule from './components/EmailModule'

function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <div className='content-root'>
        <Header />
        <div className='content'>
          <div className='module'>
            <EmailModule />
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
      </div>
    </div>
  )
}

export default App
