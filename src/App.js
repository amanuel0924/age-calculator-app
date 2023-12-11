import Icon from "../src/Assets/images/icon-arrow.svg"
import classes from "./App.module.css"
import { useState } from "react"

function App() {
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [error, setError] = useState()
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth() + 1
  const currentDay = new Date().getDate()
  const [age, setAge] = useState({
    day: "--",
    month: "--",
    year: "--",
  })

  const dayChangeHandler = (e) => {
    setDay(e.target.value)
  }
  const monthChangeHandler = (e) => {
    setMonth(e.target.value)
  }
  const yearChangeHandler = (e) => {
    setYear(e.target.value)
  }

  const calculateAge = (bday, bmonth, byear) => {
    setAge({
      day: currentDay - bday,
      month: currentMonth - bmonth,
      year: currentYear - byear,
    })
  }
  const onclickHandler = () => {
    if (day === "" || month === "" || year === "") {
      setError({ message: "This field requerd", type: "all" })
      return
    } else if (Number(day) > 31 || Number(day) < 1) {
      setError({ message: "invalid day", type: "day" })
      return
    } else if (Number(month) > 12 || Number(month) < 1) {
      setError({ message: "invalid month", type: "month" })
      return
    } else if (Number(year) > currentYear || Number(year) < 1) {
      setError({ message: "invalid year", type: "year" })
      return
    }
    calculateAge(day, month, year)
  }

  return (
    <div className={classes.App}>
      <div className={classes.container}>
        <form className={classes["input-container"]}>
          <div className={`${classes.wrappers} ${error && classes.error}`}>
            <label htmlFor="day">DAY</label>
            <input
              type="number"
              id="day"
              name="day"
              placeholder="DD"
              value={day}
              onChange={dayChangeHandler}
            />
            {error && error.type === "day" && <p>{error.message}</p>}
            {error && error.type === "all" && <p>{error.message}</p>}
          </div>
          <div className={`${classes.wrappers} ${error && classes.error}`}>
            <label htmlFor="month">MONTH</label>
            <input
              type="number"
              id="month"
              name="month"
              placeholder="MM"
              value={month}
              onChange={monthChangeHandler}
            />
            {error && error.type === "month" && <p>{error.message}</p>}
            {error && error.type === "all" && <p>{error.message}</p>}
          </div>
          <div className={`${classes.wrappers} ${error && classes.error}`}>
            <label htmlFor="year">YEAR</label>
            <input
              type="number"
              id="year"
              name="year"
              placeholder="YYYY"
              value={year}
              onChange={yearChangeHandler}
            />
            {error && error.type === "year" && <p>{error.message}</p>}
            {error && error.type === "all" && <p>{error.message}</p>}
          </div>
        </form>
        <button onClick={onclickHandler}>
          <img src={Icon} alt="arrow icon" />
        </button>

        <div className={classes.results}>
          <p>
            <span>{age.year}</span>years
          </p>

          <p>
            <span>{age.month}</span>months
          </p>

          <p>
            <span>{age.day}</span>days
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
