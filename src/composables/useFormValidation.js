export default () => {
  // const isDev = import.meta.env.DEV;

  const removeSpace = (str) => str.replace(/ /g, '')
  const isString = (parameter) => {
    if (typeof parameter === 'string') {
      return true
    } else {
      console.warn(`wrong type: ${typeof str}`)
      return false
    }
  }

  const isEmpty = (str) => {
    if (isString(str)) {
      return removeSpace(str) === ''
    }
    return false
  }

  const isMobile = (mobile) => {
    if (isString(mobile)) {
      const regex = /^09\d{8}$/
      return regex.test(removeSpace(mobile))
    }
    return false
  }

  return {
    isEmpty,
    isMobile,
  }
}