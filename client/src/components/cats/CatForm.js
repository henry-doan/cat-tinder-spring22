import { Form, Button, Row, Col } from 'react-bootstrap';
import { CatConsumer } from '../../providers/CatProvider';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const CatForm = ({ addCat, setAdd, updateCat }) => {
  const [cat, setCat] = useState({ name: '', breed: '', registry: '', avatar: '' })

  const location = useLocation()
  const { catId } = useParams()
  
  useEffect( () => {
    if (catId) {
      const { name, breed, registry, avatar } = location.state
      setCat({ name, breed, registry, avatar })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (catId) {
      updateCat(catId, cat)
    } else {
      addCat(cat)
      setAdd(false)
    }
    setCat({ name: '', breed: '', registry: '', avatar: '' })
  }

  return (
    <>
      <h1>{ catId ? 'Update' : 'Create' } Cat</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                name='name'
                value={cat.name}
                onChange={(e) => setCat({...cat, name: e.target.value })}
                type="text" 
                placeholder="Name" 
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Breed</Form.Label>
              <Form.Control 
                name='breed'
                value={cat.breed}
                onChange={(e) => setCat({...cat, breed: e.target.value })}
                type="text" 
                placeholder="Breed" 
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Registry</Form.Label>
              <Form.Control 
                name='registry'
                value={cat.registry}
                onChange={(e) => setCat({...cat, registry: e.target.value })}
                type="text" 
                placeholder="Registry" 
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Avatar</Form.Label>
              <Form.Control 
                name='avatar'
                value={cat.avatar}
                onChange={(e) => setCat({...cat, avatar: e.target.value })}
                type="text" 
                placeholder="Avatar" 
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedCatForm = (props) => (
  <CatConsumer>
    { value => <CatForm {...value} {...props} /> }
  </CatConsumer>
)

export default ConnectedCatForm;