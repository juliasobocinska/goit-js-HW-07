const categories = document.querySelectorAll("ul#categories li.item");

categories.forEach(category => {
    
    const headline = category.querySelector("h2").textContent;
    const elementLength = category.querySelectorAll("ul > li").length;
    
    console.log(`Number of categories: ${categories.length}`);
    console.log(`Category: ${headline}`);
    console.log(`Elements: ${elementLength}`);
});