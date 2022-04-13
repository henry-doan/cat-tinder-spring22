import { Container, Row, Col } from 'react-bootstrap';
import CatShow from './CatShow';
import { CatConsumer } from '../../providers/CatProvider';
import { useEffect } from 'react';
import { MyCatHeader } from '../../styles/CatStyles';
import { Rotate } from 'react-reveal';

const CatList = ({ cats, getAllCats }) => {
  
  useEffect( () => {
    getAllCats()
  }, [])

  return ( 
    <>
      <MyCatHeader>My Cats</MyCatHeader>
      <Container>
        <Row md={4} sm={12}>
          { cats.map( c => 
            <Col>
              <Rotate top left>
                <CatShow 
                  key={c.id}
                  {...c}
                />  
              </Rotate>
            </Col>
          )}
        </Row>
      </Container>
    </>
  )
}

const ConnectedCatList = (props) => (
  <CatConsumer>
    { value => <CatList {...value} {...props} /> }
  </CatConsumer>
)

export default ConnectedCatList;