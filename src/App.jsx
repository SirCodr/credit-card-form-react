function App() {
  return (
    <div className="w-full h-screen grid grid-rows-4">
      <div className="h-full row-start-1 row-end-2">
        <img
          src="bg-main-desktop.png"
          alt="Imagen de fondo"
          className="w-full h-full object-cover"
        />
      </div>
      <main className="row-start-2 row-end-5 flex justify-center">
        <form className="w-11/12 h-full flex flex-col justify-center gap-y-5">
          <section className="flex flex-col justify-center gap-y-2">
            <label
              htmlFor="input-name-id"
              className="text-dark-violet font-medium text-sm uppercase"
            >
              cardholder name
            </label>
            <input
              type="text"
              name="input-name"
              id="input-name-id"
              placeholder="e.g. Jane Applesed"
              className="outline-none border-grayish-violet-light border-2 rounded-md px-3 py-1 focus:border-dark-violet-gradient-from"
            />
          </section>
          <section className="flex flex-col justify-center gap-y-2">
            <label
              htmlFor="input-card-id"
              className="text-dark-violet font-medium text-sm uppercase"
            >
              card number
            </label>
            <input
              type="text"
              name="input-card"
              id="input-card-id"
              placeholder="e.g. 1234 5678 9123 0000"
              className="outline-none border-grayish-violet-light border-2 rounded-md px-3 py-1 focus:border-dark-violet-gradient-from"
            />
          </section>

          <div className="flex flex-row gap-x-2">
            <section className="flex flex-col justify-center gap-y-2">
              <label
                htmlFor="input-month-date-id"
                className="text-dark-violet font-medium text-sm uppercase"
              >
                exp. date (mm/yy)
              </label>
              <div className="flex gap-x-2">
                <input
                  type="number"
                  name="input-month-date"
                  id="input-month-date-id"
                  placeholder="MM"
                  className="outline-none border-grayish-violet-light border-2 rounded-md px-3 py-1 focus:border-dark-violet-gradient-from w-20"
                />
                <input
                  type="number"
                  name="input-year-date"
                  id="input-year-date-id"
                  placeholder="YY"
                  className="outline-none border-grayish-violet-light border-2 rounded-md px-3 py-1 focus:border-dark-violet-gradient-from w-20"
                />
              </div>
            </section>
            <section className="flex flex-col justify-center gap-y-2 w-full">
              <label
                htmlFor="input-cvc-id"
                className="text-dark-violet font-medium text-sm uppercase"
              >
                card number
              </label>
              <input
                type="number"
                name="input-cvc"
                id="input-cvc-id"
                placeholder="e.g. 123"
                className="outline-none border-grayish-violet-light border-2 rounded-md px-3 py-1 focus:border-dark-violet-gradient-from"
              />
            </section>
          </div>
          <button className="w-full py-2 rounded-md bg-dark-violet text-white">Confirm</button>
        </form>
      </main>
    </div>
  )
}

export default App
