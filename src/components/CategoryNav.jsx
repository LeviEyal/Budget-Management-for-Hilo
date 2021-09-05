export default function CategoryNav({
  category,
  setCategory,
  setFieldsRemaining,
}) {
  return (
    <div id="category-nav">
      <div className="navButton">
        <div className="wrapper">
          <input
            type="radio"
            name="incomeOrExpenses"
            className="incomeOrExpenses"
            id="income"
            onClick={() => setCategory("income")}
          />
          <label htmlFor="income" className="incomeOrExpenses income">
            Income
          </label>
          <input
            type="radio"
            name="incomeOrExpenses"
            className="incomeOrExpenses"
            id="expenses"
            onClick={() => setCategory("expenses_monthly")}
          />
          <label htmlFor="expenses" className="incomeOrExpenses expenses">
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
                defaultChecked={true}
              />
              <label htmlFor="monthly" className="incomeOrExpenses monthly">
                Monthly
              </label>
              <input
                type="radio"
                name="monthlyOrSemester"
                className="monthlyOrSemester"
                id="semester"
                onClick={() => setCategory("expenses_semester")}
              />
              <label htmlFor="semester" className="monthlyOrSemester semester">
                Semester
              </label>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
