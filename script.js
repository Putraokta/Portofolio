function addItem(type) {
    const input = document.getElementById("input" + capitalize(type));
    const list = document.getElementById("list" + capitalize(type));
  
    if (input.value.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = input.value;
  
      // Tombol hapus
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Hapus";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.onclick = () => li.remove();
  
      li.appendChild(deleteBtn);
      list.appendChild(li);
      input.value = "";
    }
  }
  

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Dark mode toggle
  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  