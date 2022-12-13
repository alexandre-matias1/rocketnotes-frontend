import { Container, Links, Content } from "./styles.js";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button/";
import { ButtonText } from "../../components/ButtonTxt/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1> Introdução ao React </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur,
             eveniet. Nemo officia velit, culpa autem totam, sunt inventore quo laudantium
              quisquam ad molestias architecto assumenda repudiandae eaque esse dignissimos.
              Libero.</p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">twitter.com/buzzitos</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Node" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
