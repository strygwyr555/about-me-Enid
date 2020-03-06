QUnit.module('MAIN MODULE', {})

QUnit.test("basics", function( assert ) {``
    assert.equal(math('4','2'), 100.53096491487338);
  });

QUnit.config.autostart = false 

window.addEventListener('load', () => {
  const appURL = 'app.html' 
  const openingTag = '<main class="container mt-5 flex-fill">'
  const closingTag = '</main>' 
  fetch(appURL, { method: 'GET' })
    .then(response => {
      return response.text()
    })
    .then(txt => {                
      const start = txt.indexOf(openingTag)
      const end = txt.indexOf(closingTag) + closingTag.length
      const html = txt.substring(start, end)
      const qunitFixtureBody = document.querySelector('#qunit-fixture')
      qunitFixtureBody.innerHTML = html 
      console.info(qunitFixtureBody) 
    })
    .catch(error => {
      console.error('error:', error);
      QUnit.start()
    })
})