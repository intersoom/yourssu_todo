const passwordValitate = (password: string): boolean => {
  if (password.length >= 8) {
    return true
  }
  return false
}

export default passwordValitate
