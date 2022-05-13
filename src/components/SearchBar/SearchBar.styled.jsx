import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  background-image: linear-gradient(
    to right,
    #420115 10%,
    #c97991 30%,
    #740526 50%,
    #c97991 70%,
    #420115
  );

  box-shadow: 0px 2px 4px -1px rgba(59, 4, 20, 0.2),
    0px 4px 5px 0px rgba(59, 4, 20, 0.14),
    0px 1px 10px 0px rgba(59, 4, 20, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;

  &:hover {
    outline: 1px solid #740526;
  }
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
