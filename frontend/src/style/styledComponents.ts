import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "react-modal";

export const Global = styled.body`
  width: 100%;
  height: 100vh;
  background-color: #333 ;
  color: #fff;
  box-sizing: border-box;
  overflow: hidden;
  text-align:center;

  @media (max-width: 709px) {
    overflow: scroll;
    height:120vh;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  gap: 1rem;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: auto;
  height: auto;
  padding: 2rem;
  border: 1px solid #fff;
  border-radius: 0.5em;
  gap: 0.5rem;

  @media (max-width: 738px) {
    padding: 0.5rem;
  }

`;

export const Label = styled.label`
  /* border: 0.1rem solid #fff; */
  border-radius: 0.5rem;
  max-width: auto;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:0.2rem;
`;

export const TextLabel = styled.p`
  width: 6.8rem;
  text-align: center;
  font-size:1.1rem;
  /* border: 0.1rem solid #fff; */
`;



export const Input = styled.input`
  width: 15rem;
  height: 2rem;
  border: 0.1rem solid #fff;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  background-color: #00D3FA;
  color: #000;
  font-size:1rem;
  &:focus{
    border:none;
    outline:none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 342px) {
    width: 12rem;
  }

  @media (max-width: 274px) {
    width: 10rem;
  }
  
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding:1em;
  width: 10rem;
  height: 3em;
  color: #000;
  background-color: #F26419;
  border: 0.1em solid #fff;
  border-radius: 0.5em;
  font-size:0.9rem;
  text-transform:uppercase;
  &:hover{
    background-color: #b34c15;
    color: #fff;
    transition:0.5s;
  }
`;

export const ErrorsInputs = styled.p`
  font-size:0.8rem;
  color: red;
`;

export const Title= styled.h1`
  font-size: 1.9rem;
  color: #F26419;
`;

export const Linkk = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 2.5rem;
  color: #000;
  background-color: #F26419;
  border: 0.1em solid #fff;
  border-radius: 0.5em;
  font-size:0.8rem;
  text-transform: uppercase;
  &:hover{
    background-color: #b34c15;
    color: #fff;
    transition:0.5s;
  }
`

export const Nav = styled.nav`
  width: 100%;
  padding-left: 2rem;
  padding-top: 2rem;
  height: 3.5rem;
  display:flex;
  justify-content: start;
  align-items: center;
  position:fixed;
  @media (max-width: 738px) {
    position: relative;
    justify-content: center;
    padding-top: 1rem;
  }
`

// -------------------------------------------searchingForData-----------------------------------------------------------------------


export const Table = styled.div`
  width: auto;
  height: auto;
  border: 0.1rem solid #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  padding: 2rem;
`;

export const Register = styled.p`
  width: 40rem;
  height: auto;
  border: 0.1rem solid #247BA0;
  border-radius:0.5rem;
  display: flex;
  justify-content: start;
  align-items: center;
  padding:1rem;
  gap: 1rem;
  font-size:1.1rem;

  @media (max-width: 738px) {
    padding: 0.4rem;
    width: 30rem;
  }

  @media (max-width: 576px) {
    width: 25rem;
    gap:0.5rem;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    width: 13rem;
  }
`;

export const CustomModal = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 45rem;
  text-align:center;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;

  @media (max-width: 738px) {
      width: 35rem;
    }

    @media (max-width: 576px) {
      width: 30rem;
    }

    @media (max-width: 490px) {
      width: 20rem;
      padding: 0.5rem;
    }
`;

export const VerMais = styled(Link)`
  color: #0000FF;
  &:hover{
    color:#007FFF;
  }
`;
