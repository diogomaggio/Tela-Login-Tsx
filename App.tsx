import { useState } from 'react'
import PrimaryInput from './PrimaryInput'
import './App.css'
import { Box, Button, Flex } from '@chakra-ui/react'

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <div className='container'>
      <Box w='100%' h='100%'  bgGradient='linear(to-r, black, gray.600)'  >
        <h1>
          Faça seu Login.
        </h1>

        <Flex direction='column' align='flex-start'>
          <PrimaryInput
            width='70%'
            value={email}
            onChange={event => setEmail(event.target.value)}
            name='email'
            label='E-mail'
            placeholder='Ex: fulano@gmail.com'
          />

          <PrimaryInput
            width='70%'
            value={senha}
            onChange={event => setSenha(event.target.value)}
            name='Senha'
            label='Digite sua senha'
            placeholder='Senha'
          />

          <Button width="50%" ml={5} borderRadius={10}  bgGradient='linear(to-r, purple, yellow.200)'>Entrar</Button>
        </Flex>
      </Box>

    </div>
  );
}

export default App
