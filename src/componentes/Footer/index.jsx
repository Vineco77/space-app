import styled from "styled-components"

const FooterEstilizado = styled.footer`
    margin-top: 48px;
    background-color: #04244F;
    color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 26px 20rem;
    h5{
        font-size: 16px;
    }
`

const IconeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 0 63px;
`



const Footer = () => {
    return(
        <FooterEstilizado>
            <IconeContainer>
                <a href=""><img src="../imagens/sociais/facebook.svg" /></a>
                <a href=""><img src="../imagens/sociais/instagram.svg" /></a>
                <a href=""><img src="../imagens/sociais/twitter.svg" /></a>
            </IconeContainer>
            <h5>Desenvolvido por Vinicius aluno Alura</h5>
        </FooterEstilizado>
    )
}

export default Footer