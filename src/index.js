// import './css/normalize'
// import './scss/application'

const Prism = require('prismjs')

;(() => {
  const getSiblings = function (elem) {
    var siblings = []
    var sibling = elem.parentNode.firstChild
    for (; sibling; sibling = sibling.nextSibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        siblings.push(sibling)
      }
    }
    return siblings
  }

  let tabs = document.querySelector('.accordion__tabs')

  tabs.addEventListener('click', (event) => {
    if (event.target.classList.contains('accordion__tab')) {
      event.target.className += '--active';
      const siblings = getSiblings(event.target)
      for (let i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove('accordion__tab--active')
        siblings[i].classList.add('accordion__tab')
      }
    }
  })

  document.querySelector('.accordion__tab').className += '--active'

  const accordionViewCodeButton = document.getElementById('accordion-view-code') 
  var code = "var data = 1;";
  var html = Prism.highlight(code, Prism.languages.javascript);

  accordionViewCodeButton.addEventListener('click', () => {
    const preview = document.querySelector('.code-preview')
    console.log(preview.classList)
    preview.className += '--show'
    preview.innerHTML = `<pre class="language-js"><code class="language-js">${html}</code></pre>`
    // document.querySelector('.').appendChild(preview)
  })
})()
