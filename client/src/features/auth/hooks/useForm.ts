import React, { useState, useCallback } from 'react'

const useForm = (
  initialValue: string,
  validate: (str: string) => boolean
): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<boolean>>,
  boolean
] => {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(true)

  const onChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setError(!validate(e.target.value))
    setValue(e.target.value)
  }, [])

  return [value, setValue, onChangeValue, setError, error]
}

export default useForm
