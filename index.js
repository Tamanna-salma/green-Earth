// categories***
const container =document.getElementById('cardContainer')
const categoriesLoad = async () => {
  try {
    const response = await fetch('https://openapi.programming-hero.com/api/plants');
    const data = await response.json();
    console.log(data);

    const categorydiv = document.getElementById('CateGories');
    const categorilist = data.plants;

    categorilist.forEach(cate => {
      const li = document.createElement("li");
      li.textContent = cate.category;
      li.className = "text-lg font-semibold mt-1 p-2";
      li.setAttribute("data-id", cate.id);

      li.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
          const id = e.target.dataset.id;
          load(id);
        }
      });

      categorydiv.appendChild(li);
    });

  } catch (error) {
    console.log(error);
  }
};

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
        <button onclick="details Add to Cart(${plant.id})" 
          class="bg-[#15803D] text-white px-3 py-1 mt-2 rounded-full sm:96 w-56">
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
//   category show***

const load = async (id) => {
    console.log(id);
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/category/${id}`);
        const data = await res.json();
console.log(data);
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
        <button onclick="details Add to Cart(${plant.id})" 
          class="bg-[#15803D] text-white px-3 py-1 mt-2 rounded-full w-full">
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


