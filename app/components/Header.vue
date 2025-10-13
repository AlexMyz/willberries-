<template>
  <header class="container header px-4 px-md-0">
    <div class="row justify-content-between align-items-center">
      <div class="col-lg-2 col-6">
        <NuxtLink to="/" class="logo-link">
          <img
            width="128"
            src="/img/logo.svg"
            alt="logo: Willberries"
            class="logo-image"
          />
        </NuxtLink>
      </div>
      <div class="col-lg-6 d-none d-lg-block">
        <nav>
          <ul class="navigation d-flex justify-content-around">
            <li class="navigation-item">
              <NuxtLink to="/products" class="navigation-link" data-field="gender">Womens</NuxtLink>
            </li>
            <li class="navigation-item">
              <NuxtLink to="/products" class="navigation-link" data-field="gender">Mens</NuxtLink>
            </li>
            <li class="navigation-item">
              <NuxtLink to="/products" class="navigation-link" data-field="category">Clothing</NuxtLink>
            </li>
            <li class="navigation-item">
              <NuxtLink to="/products" class="navigation-link" data-field="category">Accessories</NuxtLink>
            </li>
            <li class="navigation-item">
              <NuxtLink to="/products" class="navigation-link" data-field="category">Shoes</NuxtLink>
            </li>
            <li class="navigation-item">
              <NuxtLink to="/products" class="navigation-link">All</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-lg-2 d-none d-lg-block">
        <div class="form-control search-block">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <img src="/img/search.png" alt="search" />
          </button>
        </div>
      </div>
      <div class="col-lg-2 col-6 d-flex justify-content-end">
        <button class="button button-cart">
          <img class="button-icon" src="/img/cart.svg" alt="icon: cart" />
          <span class="button-text">Cart</span>
          <span class="button-text cart-count"></span>
        </button>
      </div>
    </div>
    <!-- /.row -->
  </header>
</template>