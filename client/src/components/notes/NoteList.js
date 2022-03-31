import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NoteConsumer } from "../../providers/NoteProvider";
import { Row, Col, Modal, Button } from 'react-bootstrap';

const NoteList = ({ notes, getAllNotes }) => {
  const { catId } = useParams()
  const [show, setShow] = useState(false);

  useEffect( () => {
    getAllNotes(catId)
  }, [])

  return (
    <>
      { notes.map( n => 
        <Row>
          <Col>
            {n.subject}
          </Col>
          <Col>
            {n.body.substring(0, 20)}
          </Col>
          <Col>
            <p onClick={() => setShow(true)}>eye</p>
            <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
                <h1>Note Show</h1>
                <p>
                  Date: {n.note_date}
                </p>
                <p>
                  Time: {n.note_time}
                </p>
                <p>
                  Subject: {n.subject}
                </p>
                <p>
                  Notes: {n.body}
                </p>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </Modal.Body>
            </Modal>
          </Col>
        </Row> 
      )}
    </>
  )
}

const ConnectedNoteList = (props) => (
  <NoteConsumer>
    { value => <NoteList {...props} {...value} />}
  </NoteConsumer>
)

export default ConnectedNoteList;