const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link')
  const more = document.querySelector('.more')

  const renderGoods = (goods) => {
    const goodsContainer = document.querySelector(".long-goods-list")
    goodsContainer.innerHTML = ''

    goods.forEach(good => {
      goodsContainer.innerHTML += `
        <div class="col-lg-3 col-sm-6">
					<div class="goods-card">
						<span class="label ${good.label ? null : 'd-none'}">${good.label}</span>
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

  const getData = (value, category) => {
    fetch("./db/db.json")
      .then(res => res.json())
      .then(data => {
        const array = category ? data.filter(item => item[category] === value) : data
        localStorage.setItem("goods", JSON.stringify(array))
        
        if (window.location.pathname !== "./goods.html") {
          window.location.href = "./goods.html"
        } else {
          renderGoods(array)
        }
      })
  } 

  links.forEach((link) => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const linkValue = link.textContent
      const category = link.dataset.field
      getData(linkValue, category)
    })
  })

  try {
    more.addEventListener("click", (e) => {
      e.preventDefault()
      getData("All")
    })
  } catch (error) {
    console.error('no more')
  }

  if (localStorage.getItem('goods') && window.location.pathname === "/goods.html") {
    renderGoods(JSON.parse(localStorage.getItem("goods")))
  }
} 

getGoods()