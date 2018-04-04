
function pluralize(number, text) {
  return (number == 1) ? `${number} ${text}` : `${number} ${text}s` 
}

document.addEventListener('DOMContentLoaded', function () {
  const selector = document.querySelector('#selector')
  const total = document.querySelector('#total')
  
  selector.addEventListener('keyup', (event) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id , { selector: selector.value }, (response) => {
        total.innerHTML = pluralize(response.length, 'element')
      })
    })
  })
})

