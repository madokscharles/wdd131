const productSelect = document.querySelector("#product");

const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

function createProductList() {
  if (!productSelect) return;
  products.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.name;
    productSelect.appendChild(opt);
  });
}
createProductList();

function tallyReviews() {
  let count = Number(localStorage.getItem("tally")) || 0;
  count++;
  localStorage.setItem("tally", count);

  const counterDisplay = document.querySelector("#reviews");
  if (counterDisplay) {
    counterDisplay.textContent = `You’ve submitted ${count} review(s).`;
  }
}
