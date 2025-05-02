fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const liElements = document.querySelectorAll('.attribute-list li');

    data.forEach((item, index) => {
      const li = liElements[index];
      if (li) {
        li.innerHTML = `
          <div>
            <img src="${item.icon}" alt="${item.category.toLowerCase()}-attribute-icon"/>
            <p>${item.category}</p>
          </div>
          <span><span class="bold">${item.score}</span> / 100</span>
        `;
      } else {
        console.warn(`Could not find element with index: ${index}`);
      }
    });
  })
  .catch(error => console.error('error loading JSON:', error));
