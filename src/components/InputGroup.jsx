const InputGroup = ({
  name,
  placeholder,
  title,
  error,
  handleChange,
  type = "text",
}) => {
  return (
    <section className="flex flex-col justify-center gap-y-2">
      <label
        htmlFor={"input-" + name + "-id"}
        className="text-dark-violet font-medium text-sm uppercase"
      >
        {title}
      </label>
      <input
        type="text"
        name={name}
        id={"input-" + name + "-id"}
        placeholder={placeholder}
        onChange={handleChange}
        className={
          "outline-none border-grayish-violet-light uppercase border-2 rounded-md px-3 py-1 focus:border-dark-violet-gradient-from " +
          (error ? "border-red-500" : "")
        }
      />
      {error && <small className="text-xs">{error}</small>}
    </section>
  )
}

export default InputGroup
