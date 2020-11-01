window.app = {
  user: {},
  attestations: [],
  cardContainer: document.querySelector('#cards'),
  cardTemplate: document.querySelector('#cards').innerHTML,
}

function prefillForm(data) {
  for (let p in data) {
    const input = document.querySelector(`[name="${p}"]`)
    if(input) input.value = data[p]
  }
}

function loadAttestationsCards() {
  const cards = app.attestations.map(data => {
    return app.cardTemplate
      .replaceAll('{id}', data['id'])
      .replaceAll('{params}', serialize(data))
      .replaceAll('{reason}', document.querySelector(`[value=${data['field-reason']}]`).textContent)
      .replaceAll('{delay}', String(data['delay']))
  })
  app.cardContainer.innerHTML = cards.join('')
}

function deleteAttestation(id) {
  app.attestations = app.attestations.filter(a => a.id != id)
  saveAttestations()
  loadAttestationsCards()
}

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

function loadData() {
  attestations = JSON.parse(localStorage.attestations || '[]')
}

function saveAttestations() {
  localStorage.attestations = JSON.stringify(app.attestations)
}

function saveUser() {
  localStorage.user = JSON.stringify(app.user)
}

function saveData(data) {
  app.user = JSON.stringify(data)
  app.attestations.push(Object.assign({}, data, {id: Math.round(Math.random()*999999)}))
  saveUser()
  saveAttestations()
}

document.addEventListener('DOMContentLoaded', () => {
  app.user = location.search
    ? queryParams()
    : JSON.parse(localStorage.user || '{}')
  prefillForm(app.user)

  app.attestations = JSON.parse(localStorage.attestations || '[]')

  loadAttestationsCards()
})
