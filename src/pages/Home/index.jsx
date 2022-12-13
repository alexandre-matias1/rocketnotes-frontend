import { FiPlus, FiSearch } from 'react-icons/fi'
import { Link } from "react-router-dom";

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'


import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'


import { ButtonText } from '../../components/ButtonTxt'


export function Home(){
    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            <Header/>
            <Menu>
                <li><ButtonText title="React" /></li>
                <li><ButtonText title="Node" /></li>  
                <li><ButtonText title="JS" /></li>             
            </Menu>
            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch}/>
            </Search>
            <Content>
                <Section title="Minhas notas">
                    <Note data={{ 
                        title: 'React',
                        tags: [
                            {id: '1', name: 'react'},
                            {id: '2', name: 'node'},

                        ]
                
                }}/>
                </Section>
            </Content>
            <NewNote to="/new">
                <FiPlus />
                Criar Nota
            </NewNote>

        </Container>
    )
}