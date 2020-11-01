function zerofill(int) {
  return String(int).padStart(2, '0')
}

window.addEventListener("DOMContentLoaded", () => {
  const q = queryParams(window.location.hash.substr(1))
  const birthdate = new Date(q.birthday)
  q.birthday = `${zerofill(birthdate.getDate())}/${zerofill(birthdate.getMonth() + 1)}/${birthdate.getFullYear()}`
  for (key in q) {
    const field = document.querySelector(`[name="${key}"]`)
    if (!field) continue
    if (field.type == 'radio') document.querySelector(`[name="${key}"][value="${q[key]}"]`).checked = true
    else field.value = q[key]
  }

  const time = new Date()
  if(q.delay) time.setMinutes(time.getMinutes() - Number(q.delay))

  document.getElementById('field-datesortie').value = time.toJSON().slice(0, 10)
  document.getElementById('field-heuresortie').value = time.toLocaleString("fr-FR", {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  })
  setTimeout(() => { document.getElementById("generate-btn").click() }, 500)

  // setTimeout(() => { history.back() }, 5000)
});

function badScriptLoading(event) {
  console.log("Official JS is not working. Patching using local copy.")
  let script = document.createElement('script');
  script.src = "deplacement-covid-19/main.d56e3230.js";
  document.head.append(script)
}
