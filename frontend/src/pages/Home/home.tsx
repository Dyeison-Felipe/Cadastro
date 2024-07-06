import * as S from '../../style/styledComponents'


const Home= () => {


  return (
    <S.Section>
      <S.Title>Sistema de cadastro de usuários</S.Title>

      <S.Table>
        <S.Linkk to='/register'>Cadastrar</S.Linkk>
        <S.Linkk to='/registration'>Lista de cadastros</S.Linkk>

      </S.Table>

    </S.Section>
  )
}

export default Home