const createErrorFactory = function (name) {
  return class BussinessError extends Error {
    constructor(message) {
      super(message)
      this.name = name
    }
  }
}

export const ValidationError = createErrorFactory('ValidationError')