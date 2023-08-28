import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  background-color: #0a6b38;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

const MainContent = styled.main`
  padding: 20px;
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  color: #0a6b38;
`;

const BulletList = styled.ul`
  padding-left: 20px;
`;

const BulletItem = styled.li`
  margin-bottom: 10px;
`;

const ContactButton = styled.button`
  background-color: #0a6b38;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;

const HomePage = () => (
  <Container>
    <Header>
      <h1>FORREST ENVIRONMENTAL SERVICES, Inc.</h1>
    </Header>
    <MainContent>
      <SectionTitle>PROVIDING PROFESSIONAL GEOPHYSICAL SURVEYS TO MEET A WIDE RANGE OF CLIENT NEEDS</SectionTitle>
      <p>FES, Inc. specializes in the conduct of geophysical surveys to provide clients with critical subsurface data collected through non-invasive, non-destructive methods. FES Inc. has conducted hundreds of successful geophysical surveys providing clients with the data needed to make sound decisions.</p>
  
      <SectionTitle>CLIENTS</SectionTitle>
      <BulletList>
        <BulletItem>Environmental Engineers/Consultants</BulletItem>

      </BulletList>
      <ContactButton>Contact Us</ContactButton>
    </MainContent>
  </Container>
);

export default HomePage;
