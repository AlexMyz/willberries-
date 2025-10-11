const search = () => {
  const input = document.querySelector(".search-block > input")
  const searchBtn = document.querySelector(".search-block > button")

  const renderGoods = (goods) => {
    const goodsContainer = document.querySelector(".long-goods-list")
    goodsContainer.innerHTML = ""
 
    goods.forEach((good) => {
      goodsContainer.innerHTML += `
        <div class="col-lg-3 col-sm-6">
					<div class="goods-card">
						<span class="label ${good.label ? null : "d-none"}">${good.label}</span>
            <img src="./db/${good.img}" alt="image: Hoodie" class="goods-image">
						<h3 class="goods-title">${good.name}</h3>
						<p class="goods-description">${good.description}</p>
						<button class="button goods-card-btn add-to-cart" data-id="007">
							<span class="button-price">$${good.price}</span>
						</button>
					</div>
				</div>
      `
    })
  }

  const getData = (value) => {
    fetch("./db/db.json")
      .then((res) => res.json())
      .then((data) => {
        const array = data.filter(good => good.name.toLowerCase().includes(value.toLowerCase()))
        localStorage.setItem("goods", JSON.stringify(array))

        if (window.location.pathname !== "/glo_academy/wildberris/goods.html") {
          window.location.href = "./goods.html"
        } else {
          renderGoods(array)
        }
      })
  }  

  try {
    searchBtn.addEventListener("click", () => {
      getData(input.value)
    })
  } catch (error) {
    console.error(error.message)
  }
}

search()
