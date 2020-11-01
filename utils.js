function queryParams(string = document.location.search) {
  return Array.from(new URLSearchParams(string)).reduce((acc, a) => Object.assign(acc, ({[a[0]]: a[1]})), {})
}
