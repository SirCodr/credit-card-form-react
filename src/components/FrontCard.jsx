const FrontCard = ({ cvc }) => {
  return (
    <div className="back-card w-60 h-44 absolute top-6 right-6">
      <div className="w-full h-full relative">
        <small className="absolute top-14 right-8 text-white">
          {cvc ?? "000"}
        </small>
      </div>
    </div>
  )
}

export default FrontCard
