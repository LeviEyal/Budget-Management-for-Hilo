const Body = props => {
  let rows = [];
  for (let i = 0; i < 3; i++) {
    let cells = [];
    for (let j = 0; j < 5; j++) {
      cells.push(
        <div
          key={`cell-${i}-${j}`}
          className="cell"
          onClick={() => props.onCellClick(i, j)}
        >
          {props.cells[i][j]}
        </div>
      );
    }
    rows.push(
      <div key={`row-${i}`} className="row">
        {cells}
      </div>
    );
  }
  return <div className="body">{rows}</div>;
};

export default Body;