import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import style from "./Cards.module.css"

const Cards = ({ title, textUseRef }) => {
  return (
    <Card style={{ width: '18rem' }} className={style.cardShadow}>
      <Form.Check
        type="checkbox"
        className={style.formCheck}
        ref={textUseRef}
        label=""
      />
      <Card.Body className={style.cardBody}>
        <Card.Subtitle className="mb-2 text-muted">Create</Card.Subtitle>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default Cards;
