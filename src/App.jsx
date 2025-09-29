import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import EmailModule from './components/EmailModule'
import IPModule from './components/IPModule'
import { useState } from 'react'

function App() {
  const [activeModule, setActiveModule] = useState('email'); // 'email' ou 'ip'

  return (
    <div className="main-container">
      <Sidebar onSelect={setActiveModule} active={activeModule}/>
      <div className='content-root'>
        <Header />
        {activeModule === 'email' && <EmailModule />}
        {activeModule === 'ip' && <IPModule />}
        {activeModule === 'home' && <div className='home'>
          <h1>Bem-vindo ao CheckPoint</h1>
          <p>Seu ponto de verificação para segurança digital. Utilize as ferramentas de checagem de e-mail e IP para garantir que suas informações estejam seguras.</p>
          <br />
          <p>Selecione uma opção no menu lateral para começar.</p>
          <br />
          <h2 className='Warn'>AVISO: ESTE APP ESTÁ EM DESENVOLVIMENTO. Bugs podem ocorrer. Caso ocorra algum problema, entre em contato no github do projeto.</h2>
        </div>}
        {activeModule === 'senha' && <div className='password'>
          <h1>Em breve...</h1>
          <p>Estamos trabalhando para trazer a você uma ferramenta de checagem de senhas. Fique atento às atualizações!</p>
        </div>}
      </div>
    </div>
  )
}

export default App
