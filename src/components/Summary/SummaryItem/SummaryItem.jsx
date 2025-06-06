const SummaryItem = (props) => {
  const { title, amount } = props;

  return (
    <li>
      <p>{amount}</p>
      <h4>{title}</h4>
    </li>
  );
};

export default SummaryItem;
