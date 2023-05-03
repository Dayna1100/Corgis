const dogs = ["kiki"];

// Create a document fragment:
const dFrag = document.createDocumentFragment();
for (let x in dogs) {
  const li = document.createElement('li');
  li.textContent = dogs[x];
  dFrag.appendChild(li);
}

// Add fragment to a list: 
document.getElementById('list').appendChild(dFrag);
