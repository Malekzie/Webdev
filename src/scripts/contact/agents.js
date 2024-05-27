const agentData = [
     {
          image: '../../../assets/images/contact/woman1.jpg',
          address: 'Ontario, Canada',
          name: 'Maria Cunnings',
          phone: '647-123-4567',
          email: 'MCunnings@acme.net',
          alt: 'Maria Cunnings',
          quirk: 'I love to travel and have been to 30 countries.'
     },
     {
          image: '../../../assets/images/contact/man1.jpg',
          address: 'New York, USA',
          name: 'Blake Edwards',
          phone: '310-123-4567',
          email: 'BEdwards@acme.net',
          alt: 'Blake Edwards',
          quirk: 'I have a pet cat named Whiskers.'
     },
     {
          image: '../../../assets/images/contact/woman2.jpg',
          address: 'London, England',
          name: 'Rosa De Leon',
          phone: '020-123-4567',
          email: 'DLRosa@acme.net',
          alt: 'Rosa De Leon',
          quirk: 'I speak 5 languages and love to cook.'
     },
     {
          image: '../../../assets/images/contact/woman3.jpg',
          address: 'Cairo, Egypt',
          name: 'Fatima Al Saed',
          phone: '01-123-4567',
          email: 'ASFatima@acme.net',
          alt: 'Fatima Al Saed',
          quirk: 'I have a pet bird named Tweety.'
     },
     {
          image: '../../../assets/images/contact/man2.jpg',
          address: 'Cologne, Germany',
          name: 'Herman Schmidt',
          phone: '01-123-4567',
          email: 'SHerman@acme.net',
          alt: 'Herman Schmidt',
          quirk: 'I have a pet dog named Max.'
     },
     {
          image: '../../../assets/images/contact/man3.jpg',
          address: 'Dodoma, Tanzania',
          name: 'Juma Mwamba',
          phone: '01-123-4567',
          email: 'MJuma@acme.net',
          alt: 'Juma Mwamba',
          quirk: 'I have a pet monkey named Coco.'
     }
]


// Styles
const containerStyle = 'flex flex-wrap max-w-sm justify-center gap-4 w-[10rem]';
     cardStyle = 'flex flex-col items-center gap-2';
     imgStyle = 'w-[5rem] h-[5rem] rounded-full object-cover';
     countryStyle = 'text-gray-500 text-sm';
     nameStyle = 'text-2xl font-semibold mt-2';
     phoneStyle = 'text-sm underline text-rose-500';
     emailStyle = 'text-blue-500 text-sm cursor-pointer';

const agentDiv = document.getElementById('agents');

agentData.forEach(agent => {

     // Create elements
     const container = document.createElement('div'),
          card = document.createElement('div'),
          img = document.createElement('img'),
          country = document.createElement('p'),
          name = document.createElement('p');
          email = document.createElement('p');
          phone = document.createElement('p');
          quirk = document.createElement('p');

     // Add classes
     container.className = containerStyle;
     card.className = cardStyle;
     img.className = imgStyle;
     country.className = countryStyle;
     name.className = nameStyle;
     email.className = emailStyle;
     phone.className = phoneStyle;

     // Add content
     img.src = agent.image;
     img.alt = agent.alt;
     country.textContent = agent.address;
     name.textContent = agent.name;
     email.textContent = agent.email;
     phone.textContent = agent.phone;
     quirk.textContent = agent.quirk;

     // Append elements
     card.appendChild(img);
     card.appendChild(country);
     card.appendChild(name);
     card.appendChild(email);
     card.appendChild(phone);
     card.appendChild(quirk);
     container.appendChild(card);
     agentDiv.appendChild(container);
})
