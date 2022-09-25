const emailValidate = (email: string): boolean => {
  if (email.includes('@') && email.includes('.')) {
    return true
  }
  return false
}

export default emailValidate
