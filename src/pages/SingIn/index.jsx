import {Container, Form, Background} from './styles'
import {Button} from '../../components/Button'
import {FiMail, FiLock} from 'react-icons/fi'
import {Input} from '../../components/Input'
import { Link } from 'react-router-dom'


export function SingIn(){
    return(
        <Container>
            <Form>
            <h1>RocketMovie</h1>
            
            <p>Aplicação para salvar e gerenciar seus links úteis</p>

            <h2>Faça seu login</h2>

            <Input placeholder='E-mail' type="text" icon={FiMail}/>
            <Input placeholder='Password' type="password" icon={FiLock}/>

            <Button title="Entrar"/>

            <Link to='/register'>Criar conta</Link>

            </Form>
            <Background/>
        </Container>

    )
}