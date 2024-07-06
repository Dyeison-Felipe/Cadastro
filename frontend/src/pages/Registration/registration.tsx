import * as S from "../../style/styledComponents";
import SearchingForData from "../../components/SearchingForData/searchingForData";

const Registration = () => {
  return (
    <>
      <S.Nav>
        <S.Linkk to="/">voltar</S.Linkk>
      </S.Nav>
      <S.Section>
        <SearchingForData />
      </S.Section>
    </>
  );
};

export default Registration;
