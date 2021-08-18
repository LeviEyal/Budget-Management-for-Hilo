import React, { useState } from "react";
import "./CategoryNav.css";
import EditFields from "./EditFields";

export default function CategoryNav() {
  const [op, setOp] = useState("");

  return (
    <div>
      <div className="navButton">
        <div className="t">
          <button onClick={() => setOp("income")}>Income</button>
          <button onClick={() => setOp("expenses")}>Expenses</button>
        </div>
				<br />
        {op.startsWith("expenses") ? (
					<div className="t tt">
            <button onClick={() => setOp("expenses_monthly")}>Monthly</button>
            <button onClick={() => setOp("expenses_semester")}>Semester</button>
          </div>
        ) : null}
      </div>
			<EditFields op={ op }/>
    </div>
  );
}
