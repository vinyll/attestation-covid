function prefill(data) {
  for (let p in data) {
    const input = document.querySelector(`[name="${p}"]`)
    if(input) input.value = data[p]
  }
}

if(location.search) prefill(queryParams())
else prefill(JSON.parse(localStorage.user || '{}'))

function loadAttestationsCards() {
  const container = document.querySelector('#cards')
  const template = container.innerHTML
  const attestations = JSON.parse(localStorage.attestations || '[]')
  const cards = attestations.map(data => {
    return template
      .replaceAll('{params}', serialize(data))
      .replaceAll('{reason}', document.querySelector(`[value=${data['field-reason']}]`).textContent)
      .replaceAll('{delay}', String(data['delay']))
  })
  container.innerHTML = cards.join('')
}
loadAttestationsCards()

function submitData(form) {
  const data = Array.from(form.elements).filter(f => f.name).reduce((acc, field) => (Object.assign(acc, {[field.name]: field.value})), {})

  // const url = `${window.location.origin}/generate.html#${serialize(data)}`

  saveData(data)
}

function serialize(obj) {
  return Object.keys(obj).map(p => {
    return encodeURIComponent(p) + "=" + encodeURIComponent(obj[p])
  }).join('&')
}

function saveData(data) {
  localStorage.user = JSON.stringify(data)
  const attestations = JSON.parse(localStorage.attestations || '[]')
  attestations.push(data)
  localStorage.attestations = JSON.stringify(attestations)
}
