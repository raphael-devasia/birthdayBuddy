const Person = ({ image, name, DOB }) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{DOB}</p>
      </div>
    </article>
  );
};
export default Person;
