import { Link } from 'react-router-dom';
import CatHeader from '../../images/catHeader.jpg';
import Cat from '../../images/cat.png';
import { Row, Col, Container, Accordion, Button } from 'react-bootstrap';
import { Fade, Zoom, Flip } from 'react-reveal';

const Home = () => (
  <>
    <img src={CatHeader} width='100%' alt='cat header' />
    <Container>
      <br />
      <br />
      <Row>
        <Col md={6} sm={12}>
          <Fade left>
            <h3>Enjoy a Catpuccino in a Purrfect Catmosphere</h3>
          </Fade>
        </Col>
        <Col md={6} sm={12}>
          <Fade right>
            <p>Have purrsuasive experience with purrty darn cute kittys in the biggest meowment of the century.</p>
            <Link to='/register'>
              <Button>
                Sign Up
              </Button>
            </Link>
            <Link to='/login'>
              <Button>
                Login
              </Button>
            </Link>
          </Fade>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col md={6} sm={12}>
          <Zoom top>
            <img src={Cat} width='50%' alt='cat' />
          </Zoom>
        </Col>
        <Col md={6} sm={12}>
          <Zoom bottom>
            <h3>Check out Pawsome Cats while enjoying some Kit-teas</h3>
            <p>Meow Meow Meow Meow Meow!</p>
          </Zoom>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Flip right>
        <h3 className='text-center'>FAQ</h3>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What kind of cats are there?</Accordion.Header>
            <Accordion.Body>
              There are all sorts of cats with different names, breeds and sizes.
              You can also bring in your cat as well and import them to our wide
              data selection.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Is it legal to have this many cats?</Accordion.Header>
            <Accordion.Body>
              All the cats will have to have a registry to be added into our site. Then
              One everything with all of the fields filled out, that would be all the info
              we need to verify our furry friends.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Where did the mascot come from?</Accordion.Header>
            <Accordion.Body>
              Our mascot comes from a long line of strays that we now have put as a 
              heel into our marketing side. She is well groomed and mannered, and loves 
              all kinds of milk.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Flip>
      <br />
      <br />
    </Container>
  </>
)

export default Home;