const categories = document.querySelectorAll("ul#categories > li.item");
console.log("Number of categories:", categories.length);

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle}\n` + `Elements: ${categoryItems}\n`);
});
