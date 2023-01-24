const BackCard = ({ name, month, year, cardNumber }) => {
  return (
    <div className="front-card w-80 h-40 absolute top-36 left-8 px-6 py-4 text-white grid grid-rows-4">
      <div className="row-start-1 row-end-2 flex items-center gap-x-3">
        <div className="w-8 h-8 rounded-full bg-white"></div>
        <div className="w-4 h-4 rounded-full border-white border"></div>
      </div>
      <div className="row-start-3 row-end-5 flex flex-col">
        <section className="front-card--number text-xl leading-none tracking-widest">
          {cardNumber ?? "0000 0000 0000 0000"}
        </section>
        <section className="w-full flex justify-between">
          <small className="uppercase">{name ?? "cardholder name"}</small>
          <small>
            {month ?? "00"}/{year ?? "00"}
          </small>
        </section>
      </div>
    </div>
  )
}

export default BackCard
