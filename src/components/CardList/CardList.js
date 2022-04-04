import Card from '../Card';
import './CardList.css';

const CardList = ({ items }) => {
  return (
    <div className="cardList">
      {items.map(({ id, ...props }) => (
        <Card key={id} id={id} {...props} />
      ))}
    </div>
  );
};

export default CardList;
