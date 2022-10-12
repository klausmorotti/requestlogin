import styles from './styles.module.css';
import { ChangeEvent, useState } from 'react';

const App = () => {

  const request = async () => {
    let req = await fetch('http://localhost/audax/php/confere_senha.php', {
      method: 'POST',
      body: JSON.stringify({
        "chave":emailValue,
        "senha":'c4ca4238a0b923820dcc509a6f75849b'
      }),
      headers: { 'Content-type': 'application/json' }
    });
    let json = await req.json();
    console.log(json)
  }

  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');

  const clickSendEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value)
  }
  const clickSendPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  }
  const sendInfo = (e: any) => {
    e.preventDefault();
    if (emailValue && passwordValue) {
      request();
    } else {
      alert('Preencha todos os campos!!!')
    }
  }

  return (
    <div className={styles.container}>

      <div className={styles.areaLogin}>

        <h2>Login</h2>

        <form action="" method="POST" >

          <input
            name="chave"
            type="text"
            placeholder="Informe seu Email"
            value={emailValue}
            onChange={clickSendEmail}
          />

          <input
            name="senha"
            type="password"
            placeholder="Informe sua Senha"
            value={passwordValue}
            onChange={clickSendPassword}
          />

          <button onClick={sendInfo}>Enviar</button>

        </form>

      </div>

    </div>
  )
}

export default App;