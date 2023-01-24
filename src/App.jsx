import { useEffect, useState } from "react"
import BackCard from "./components/BackCard"
import FrontCard from "./components/FrontCard"
import InlineInputGroup from "./components/InlineInputGroup"
import InputGroup from "./components/InputGroup"
import { ValidationError } from "./errors"
import { isAnyNumber } from "./validation"

function App() {
  const [data, setData] = useState(() => ({
    name: null,
    cardNumber: null,
    month: null,
    year: null,
    cvc: null,
  }))

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    try {
      const input = e.target
      if (input.value == "") {
        setErrors((prevState) => ({
          ...prevState,
          [input.name]: "Can´t be blank",
        }))
        // throw new ValidationError()
      }else{
        setErrors((prevState) => ({ ...prevState, [input.name]: undefined }))
      }

      setData((prevData) => ({ ...prevData, [input.name]: input.value }))
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = () => {}

  return (
    <div className="w-full h-screen grid grid-rows-4">
      <header className="h-full row-start-1 row-end-2 relative">
        <FrontCard cvc={data.cvc} />
        <BackCard
          name={data.name}
          month={data.month}
          year={data.year}
          cardNumber={data.cardNumber}
        />
      </header>
      <main className="row-start-2 row-end-5 flex justify-center">
        <form
          className="w-11/12 h-full flex flex-col justify-center gap-y-5"
          onSubmit={handleSubmit}
        >
          <InputGroup
            name="name"
            title="cardholder name"
            placeholder="e.g. Jane Applesed"
            error={errors.name}
            handleChange={handleChange}
          />
          <InputGroup
            name="cardNumber"
            title="card number"
            placeholder="e.g. 1234 5678 9123 0000"
            error={errors.cardNumber}
            handleChange={handleChange}
          />
          <InlineInputGroup errors={errors} handleChange={handleChange} />
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-dark-violet text-white"
          >
            Confirm
          </button>
        </form>
      </main>
    </div>
  )
}

export default App
