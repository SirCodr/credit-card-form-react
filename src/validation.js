export const isAnyNumber = (text) => {
  if(!text) return true

   return [...text].some(letter => !isNaN(letter))
  }