// categories****

const categoriesLoad = async () => {
  try {
    const response = await fetch('https://openapi.programming-hero.com/api/plants');
    const data = await response.json();
   
    const categorydiv = document.getElementById('CateGories');
    const categorilist = data.plants;

    categorilist.forEach(cate => {
      categorydiv.innerHTML += `
        <p class="text-lg font-semibold mt-1">${cate.category}</p>
      `;
    });
  } catch (error) {
    console.log(error);    
  }
}
categoriesLoad();