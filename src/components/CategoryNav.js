import React, { useState } from "react";
import "./CategoryNav.css";
import EditFields from "./EditFields";

export default function CategoryNav() {
  const [category, setCategory] = useState("");
  const [userData, setUserData] = useState({});

  return (
    <div>
      <div className="navButton">
        <div className="wrapper">
          <input
            type="radio"
            name="incomeOrExpenses"
            className="incomeOrExpenses"
            id="income"
            onClick={() => setCategory("income")}
          />
          <label for="income" className="incomeOrExpenses income">
            Income
          </label>
          <input
            type="radio"
            name="incomeOrExpenses"
            className="incomeOrExpenses"
            id="expenses"
            onClick={() => setCategory("expenses")}
          />
          <label for="expenses" className="incomeOrExpenses expenses">
            Expenses
          </label>
        </div>
        <br />
        {category.startsWith("expenses") ? (
          <div className="navButton">
          <div className="wrapper">
            <input
              type="radio"
              name="monthlyOrSemester"
              className="monthlyOrSemester"
              id="monthly"
              onClick={() => setCategory("expenses_monthly")}
            />
            <label for="monthly" className="incomeOrExpenses monthly">
              Monthly
            </label>
            <input
              type="radio"
              name="monthlyOrSemester"
              className="monthlyOrSemester"
              id="semester"
              onClick={() => setCategory("expenses_semester")}
            />
            <label for="semester" className="monthlyOrSemester semester">
              Semester
            </label>
          </div>

          </div>
        ) : null}
      </div>

      {category === "" ? null : <EditFields category={category} />}
    </div>
  );
}
