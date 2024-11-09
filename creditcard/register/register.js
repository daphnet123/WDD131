// Initialize participant count
let participantCount = 1;

// Add event listener to "Add Participant" button
document.getElementById('add').addEventListener('click', function() {
  participantCount++;
  const newParticipantHTML = participantTemplate(participantCount);
  document.getElementById('add').insertAdjacentHTML('beforebegin', newParticipantHTML);
});

// Function to generate participant template HTML
function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname${count}"> First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" required />
      </div>
      <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}" />
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee${count}" />
      </div>
      <div class="item">
        <label for="date${count}">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date${count}" />
      </div>
      <div class="item">
        <p>Grade</p>
        <select name="grade${count}">
          <option selected value="" disabled></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
    </section>
  `;
}

// Form submission event listener
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const totalFee = totalFees();
  const adultName = document.getElementById('adult_name').value;
  const message = successTemplate({
    name: adultName,
    count: participantCount,
    total: totalFee,
  });

  // Hide form and show summary message
  document.querySelector('form').style.display = 'none';
  document.getElementById('summary').innerHTML = message;
  document.getElementById('summary').style.display = 'block';
});

// Calculate total fees function
function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];
  return feeElements.reduce((sum, elem) => sum + parseFloat(elem.value || 0), 0);
}

// Success message template
function successTemplate(info) {
  return `
    <p>Thank you, ${info.name}, for registering. You have registered ${info.count} participants and owe $${info.total} in fees.</p>
  `;
}
