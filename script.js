document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form")
    const signatureDiv = document.querySelector('.signature');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.elements['name'].value;
      const title = form.elements['title'].value;
      const email = form.elements['email'].value;
      const phone = form.elements['phone'].value;
      const address = form.elements['address'].value;
      const logoUrl = form.elements['logo'].value;
      const linkedinUrl = form.elements['social'].value;
      const twitterUrl = form.elements['social1'].value;
  
      const logoImg = `<img src="${logoUrl}" alt="Logo">`;
      const nameText = `<strong>${name}</strong>`;
      const titleText = title ? `, ${title}` : '';
      const emailLink = `<a href="mailto:${email}">${email}</a>`;
      const phoneText = phone ? `<br>${phone}` : '';
      const addressText = address ? `<br>${address}` : '';
      const linkedinLink = linkedinUrl ? `<a href="${linkedinUrl}">LinkedIn</a>` : '';
      const twitterLink = twitterUrl ? `<a href="${twitterUrl}">Twitter</a>` : '';
  
      const signature = `
        <div class="card">
          ${logoImg}${nameText}${titleText}<br>
          ${emailLink}${phoneText}${addressText}<br>
          ${linkedinLink} ${twitterLink}
        </div>
      `;
  
      signatureDiv.innerHTML = signature;
    });
  });
  