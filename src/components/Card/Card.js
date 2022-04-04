import './Card.scss';

const Card = ({ id, name, email, username }) => {
  return (
    <div className="card bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3 tc">
      <img
        alt={username}
        src={`https://robohash.org/${id}?set=set4&size=200x200`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
