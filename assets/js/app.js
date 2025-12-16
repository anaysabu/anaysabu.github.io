async function loadProjects(jsonPath) {
  const response = await fetch(jsonPath);
  const data = await response.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <a href="${item.link}">
        <img src="${item.image}" alt="${item.title}">
        <div class="content">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </a>
    `;

    list.appendChild(card);
  });
}
