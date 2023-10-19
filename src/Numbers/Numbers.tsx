const Numbers = ({numbers}) => {
  return (
    <div>
      <div className="numbers-container">
        <div className="numbers">{numbers[0]}</div>
        <div className="numbers">{numbers[1]}</div>
        <div className="numbers">{numbers[2]}</div>
        <div className="numbers">{numbers[3]}</div>
        <div className="numbers">{numbers[4]}</div>
      </div>
    </div>
  );
};

export default Numbers;