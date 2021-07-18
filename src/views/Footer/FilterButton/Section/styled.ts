import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { mediaQuery } from "../../../../utils/mediaQueries";

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text.inverted};
  align-content: center;
  padding: 6px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.text.inverted};
  font-weight: 700;
  padding: 0.5rem;
  align-items: center;


  ${mediaQuery.phone}{
    padding: 0.1rem;
  }
`;

export const HeaderLabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  padding: 0.5rem;
  font-size: 1em;

  ${mediaQuery.phone}{
    font-size: 0.85em;
    padding: 0.1rem;
  }
`;

export const AttributionWrapper = styled.div``;

export const AuthorWrapper = styled.div``;

export const useStyles = makeStyles({
  root: {
    padding: '3px !important',
    marginRight: '6px !important',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: 0,
    width: '19px',
    height: '19px',
    border: '1px solid #ff6ce7',
    backgroundColor: 'white',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      border: '1px solid black',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#ff6ce7',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: '19px',
      height: '19px',
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      border: '1px solid black',
      backgroundColor: 'black',
    },
  },
  indeterminateIcon: {
    backgroundColor: 'white',
    backgroundImage:
        'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      marginTop: '2px',
      marginLeft: '2px',
      marginBottom: '1px',
      marginRight: '1px',
      width: '15px',
      height: '15px',
      backgroundColor: '#ff6ce7',
      content: '""',
    },
    'input:hover ~ &': {
      border: '1px solid black',
      backgroundColor: 'black',
    },
  },
  closeButton: {
    borderRadius: '0 !important',
    color: '#ff6ce7 !important',
  },
});
