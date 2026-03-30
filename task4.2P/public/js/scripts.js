const initializeModal = () => {
  const modalElem = document.getElementById('studentModal');
  M.Modal.init(modalElem);
};

const openStudentModal = (item) => {
  document.getElementById('modalTitle').textContent = item.name;
  document.getElementById('modalDescription').textContent = item.description || 'No description provided';
  document.getElementById('modalUniversity').innerHTML = `<strong>University:</strong> ${item.university}`;
  document.getElementById('modalCourse').innerHTML = `<strong>Course:</strong> ${item.course}`;
  const modal = M.Modal.getInstance(document.getElementById('studentModal'));
  modal.open();
};

let studentsData = [];

const getStudents = () => {
  fetch("/api/students")
    .then(res => res.json())
    .then(data => {
      console.log(data); // debug
      if (data.statusCode === 200) {
        studentsData = data.data;
        addCards(studentsData);
      }
    })
    .catch(err => console.error(err));
};

const addCards = (items) => {
  let content = "";

  items.forEach((item, index) => {
    content += `
      <div class="col s12 m6 l4">
        <div class="card">
          <div class="card-content">
            <span class="card-title">${item.name}</span>
            <p><b>Course:</b> ${item.course}</p>
            <p><b>University:</b> ${item.university}</p>
            <p>${item.description}</p>
            <button class="btn view-details" data-index="${index}" type="button">View Details</button>
          </div>
        </div>
      </div>
    `;
  });

  const section = document.getElementById("recipe-section");
  section.innerHTML = content;
  section.querySelectorAll('.view-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      openStudentModal(studentsData[idx]);
    });
  });
};

$(document).ready(function () {
  initializeModal();
  getStudents();
});