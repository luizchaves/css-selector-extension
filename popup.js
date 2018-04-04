
document.addEventListener('DOMContentLoaded', function () {
  const selector = document.querySelector('#selector')
  const button = document.querySelector('#button')
  const total = document.querySelector('#total')
  
  button.addEventListener('click', (event) => {
    chrome.tabs.executeScript(null, {
      code: `activeElements('${selector.value}')`
    }
  )
  })
})

