function addMerci() {
  const message = prompt("Écris ton message de remerciement 💚");
  if (message && message.trim() !== "") {
    const list = document.getElementById("merci-list");
    const li = document.createElement("li");
    li.textContent = message;
    list.prepend(li);
  }
}

function updateJauge(value) {
  document.getElementById('score').textContent = value + '/5';
  // Update star colors
  for (let i = 1; i <= 5; i++) {
    const label = document.querySelector(`label[for=star${i}]`);
    if (i <= value) {
      label.style.color = 'var(--blue)';
    } else {
      label.style.color = '#ddd';
    }
  }
}

function openModal(src) {
  document.getElementById('modal-iframe').src = src;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('modal-iframe').src = '';
}

// Initialize jauge
document.addEventListener('DOMContentLoaded', function() {
  updateJauge(3);
});
