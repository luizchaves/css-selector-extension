
function clearActive() {
  const elements = Array.from(document.querySelectorAll('*'))
  for (const node of elements) {
    if(node.style.backgroundColor == 'rgb(204, 136, 136)')
      node.style.backgroundColor = ''
    if (node.style.border == '2px solid red')
      node.style.border = ''
  }
}

function activeElements(elements) {
  for (const node of elements) {
    node.setAttribute('style', 'background-color: rgb(204, 136, 136); border: 2px solid red;')
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  clearActive()
  if (request.selector) {
    const elements = Array.from(document.querySelectorAll(request.selector))
    activeElements(elements)
    sendResponse({ length: elements.length })
  } else {
    sendResponse({ length: 0 })
  }
})