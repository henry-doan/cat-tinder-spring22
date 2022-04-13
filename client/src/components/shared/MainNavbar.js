import { Link } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { CatNavLink } from '../../styles/CatStyles';

const MainNavbar = ({ user, handleLogout }) => {
  
  const rightNavItem = () => {
    if (user) {
      // this is links where you see once login in
      return (
        <>
          <Nav.Link>
            <CatNavLink to='/cats'>
              Cats
            </CatNavLink>
          </Nav.Link>
          <Nav.Link>
            <CatNavLink to='/randomCats'>
              Random Cats
            </CatNavLink>
          </Nav.Link>
          <Nav.Link>
            <CatNavLink to='/profile'>
              Profile
              {/* <img src={user.image} /> */}
            </CatNavLink>
          </Nav.Link>
          <Nav.Link onClick={() => handleLogout()}>
            Logout
          </Nav.Link>
        </>
      )
    } else {
      // link show when not logged in
      return (
        <>
          <Nav.Link>
            <CatNavLink to='/login'>
              Login
            </CatNavLink>
          </Nav.Link>
          <Nav.Link>
            <CatNavLink to='/register'>
              Sign Up
            </CatNavLink>
          </Nav.Link>
        </>
      )
    }
  }
  
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <CatNavLink to='/'><Navbar.Brand>CatCafe</Navbar.Brand></CatNavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              {/* Links that show up regardless of login or not */}
              { rightNavItem() }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

const ConnectedMainNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedMainNavbar;