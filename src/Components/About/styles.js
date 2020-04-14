import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: white;

    @media (max-width: 1024px) {
      flex-direction: column;
      height: auto;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    `;
   
export const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 50%;
    padding: 0 100px;

    @media (max-width: 1024px) {
     padding: 0;
     width: 100%;
    height: 100%;
    }
   
`;

export const AboutWrapper = styled.div`
    color: black;
    flex-direction: column;
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: start;
    text-align: left;

    @media (max-width: 1024px) {
          text-align: center;
          padding: 0;
          width: 100%;
          height: 100%;
    }
`;

export const Header = styled.h1`
    margin: 0 20px 0 20px;
    margin-bottom: 0px;
    font-family: 'DM Serif Display', serif;
    color: #8a8a8a;
`;

export const Description = styled.p`
    font-size: 1em;
    text-align: ${props => props.textAlign};
    margin: 30px 20px 0 20px;
    padding: 0 100px 0 0;
    font-family: 'Roboto Mono', monospace;
     @media (max-width: 1024px) {
          font-size: 1em;
          text-align: center;
          padding: 0 106px;
    }
    @media (max-width: 376px) {
      
      padding: 0;
}
`;

export const Skills = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
  @media (max-width: 1024px) {
  justify-content: center;
  margin-top: 20px;
}
`;

export const List = styled.ul`
  list-style: none;  
  font-family: 'Roboto Mono', monospace;
  padding: 0 20px;


`;

export const Point = styled.li`
    margin-bottom: 15px;
    
    
    ::before {
      font-family: FontAwesome;
      content: "\f00c";
      color: #41b883;
      padding-right: 35px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Nunito Sans',sans-serif;
    justify-content: flex-start;
    width: 100%;
    background-color: ${props => props.colour};
    color: ${props => props.fontcolor};
    
   
`;

export const Stack = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 2em;
    letter-spacing: 8px;
    margin: 20px;
    @media (max-width: 1024px) {
      justify-content: center;
      margin-top: 20px;
    }
`;