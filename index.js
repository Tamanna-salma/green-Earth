// categories****

const categoriesLoad = async () => {
  try {
    const response = await fetch('https://openapi.programming-hero.com/api/plants');
    const data = await response.json();
   console.log(data);
    const categorydiv = document.getElementById('CateGories');

    const categorilist = data.plants;

    categorilist.forEach(cate => {
      categorydiv.innerHTML += `
        <li id="${cate.id}" class="text-lg font-semibold mt-1">${cate.category}</li>  
      `
      const allLi = document.querySelectorAll("li");
    allLi.forEach((li) => {
      li.classList.remove();
      if (e.target.localName === "li") {
        console.log(e.target.id);
    }
  });
    });

  } catch (error) {
    console.log(error);    
  }
}
categoriesLoad();

//  Trees card**

const loadAllPlants = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/plants');
        const data = await res.json();

        const plantsDiv = document.getElementById('allplants');
        plantsDiv.innerHTML = '';

        data.plants.forEach(plant => {
            const card = document.createElement("div");
            card.className = "p-5 rounded-lg shadow-md";
            card.innerHTML = `
        <div">
<img class="w-full h-36 object-cover rounded-md" src="${plant.image}" alt="">
        <h4 class="font-bold mt-3">${plant.name}</h4>
         <p class="text-sm">${plant.description}</p>
        <p class="text-sm">${plant.category}</p>
       <div class=" flex justify-between p">
     <h3 class="text-sm rounded-full p-1 bg-emerald-200 text-green-600">${plant.name}</h3>
    <p class="font-semibold">$ ${plant.price}</p>
</div>
        <button onclick="loadPlant Add to Cart(${plant.id})" 
          class="bg-[#15803D] text-white px-3 py-1 mt-2 rounded">
          Add to cart
        </button> 
</div>
      `;
            plantsDiv.appendChild(card);
        });

    } catch (error) {
        console.log(error);
    }
};

loadAllPlants();