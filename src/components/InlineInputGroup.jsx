import React from "react"

const InlineInputGroup = ({ errors, handleChange}) => {
  return (
    <div className="flex flex-row items-baseline gap-x-2">
      <section className="flex flex-col justify-center gap-y-2">
        <label
          htmlFor="input-month-date-id"
          className="text-dark-violet font-medium text-sm uppercase"
        >
          exp. date (mm/yy)
        </label>
        <div className="flex gap-x-2">
          <div>
            <input
              type="number"
              name="month"
              id="input-month-date-id"
              placeholder="MM"
              onChange={handleChange}
              className={
                "outline-none border-grayish-violet-light border-2 rounded-md px-3 py-1 focus:border-dark-violet-gradient-from w-20 " +
                (errors.month ? "border-red-500" : "")
              }
            />
            {errors.month && <small className="text-xs">{errors.month}</small>}
          </div>
          <div>
            <input
              type="number"
              name="year"
              id="input-year-date-id"
              placeholder="YY"
              onChange={handleChange}
              className={
                "outline-none border-grayish-violet-light border-2 rounded-md px-3 py-1 focus:border-dark-violet-gradient-from w-20 " +
                (errors.year ? "border-red-500" : "")
              }
            />
            {errors.year && <small className="text-xs">{errors.year}</small>}
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center gap-y-2 w-full">
        <label
          htmlFor="input-cvc-id"
          className="text-dark-violet font-medium text-sm uppercase"
        >
          cvc
        </label>
        <input
          type="number"
          name="cvc"
          id="input-cvc-id"
          placeholder="e.g. 123"
          onChange={handleChange}
          className={
            "outline-none border-grayish-violet-light border-2 rounded-md px-3 py-1 focus:border-dark-violet-gradient-from w-20 " +
            (errors.cvc ? "border-red-500" : "")
          }
        />
        {errors.cvc && <p className="text-xs">{errors.cvc}</p>}
      </section>
    </div>
  )
}

export default InlineInputGroup
