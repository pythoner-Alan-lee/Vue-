let defaultCity = '化州'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
}

export default {
  city: defaultCity
}
