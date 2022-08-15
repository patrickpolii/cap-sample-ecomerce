import Header from "../components/Header";
import Footer from "../components/Footer";
import "./css/product.css"
function Product() {
  return (
    <div className="Product">
      <Header />
      <section class="product">
        <h1 class="product-category">products</h1>
        <div class="product-container">
            <div class="product-card">
              <div class="product-image">
                <span class="discount-tag">50% off</span>
                <img src="assets/images/one-fresh-red-tomato-isolated-white.jpg" class="product-thumb" alt="" />
                <button class="card-btn">add to whislist</button>
              </div>
              <div class="product-info">
                <h2 class="product-brand">Vegetables</h2>
                <p class="product-short-des">a short line about the Food..</p>
                <span class="price">$20</span><span class="actual-price">$40</span>
              </div>
            </div>
            <div class="product-card">
              <div class="product-image">
                <span class="discount-tag">50% off</span>
                <img src="assets/images/fresh-lettuce.jpg" class="product-thumb" alt="" />
                <button class="card-btn">add to whislist</button>
              </div>
              <div class="product-info">
                <h2 class="product-brand">Vegetables</h2>
                <p class="product-short-des">a short line about the Food..</p>
                <span class="price">$20</span><span class="actual-price">$40</span>
              </div>
            </div>
            <div class="product-card">
              <div class="product-image">
                <span class="discount-tag">50% off</span>
                <img src="assets/images/three-ripe-persimmon-fruits-placed-wooden-surface.jpg" class="product-thumb" alt="" />
                <button class="card-btn">add to whislist</button>
              </div>
              <div class="product-info">
                <h2 class="product-brand">Vegetables</h2>
                <p class="product-short-des">a short line about the Food..</p>
                <span class="price">$20</span><span class="actual-price">$40</span>
              </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                  <span class="discount-tag">50% off</span>
                  <img src="assets/images/fresh-raw-avocado.jpg" class="product-thumb" alt="" />
                  <button class="card-btn">add to whislist</button>
                </div>
                <div class="product-info">
                  <h2 class="product-brand">Vegetables</h2>
                  <p class="product-short-des">a short line about the Food..</p>
                  <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
              </div>
          </div>
        
          <div class="product-container">
            <div class="product-card">
              <div class="product-image">
                <span class="discount-tag">50% off</span>
                <img src="assets/images/fresh-broccoli-isolated.jpg" class="product-thumb" alt="" />
                <button class="card-btn">add to whislist</button>
              </div>
              <div class="product-info">
                <h2 class="product-brand">Vegetables</h2>
                <p class="product-short-des">a short line about the Food..</p>
                <span class="price">$20</span><span class="actual-price">$40</span>
              </div>
            </div>
            <div class="product-card">
              <div class="product-image">
                <span class="discount-tag">50% off</span>
                <img src="assets/images/white-vegetable-healthy-fresh-natural.jpg" class="product-thumb" alt="" />
                <button class="card-btn">add to whislist</button>
              </div>
              <div class="product-info">
                <h2 class="product-brand">Vegetables</h2>
                <p class="product-short-des">a short line about the Food..</p>
                <span class="price">$20</span><span class="actual-price">$40</span>
              </div>
            </div>
            <div class="product-card">
              <div class="product-image">
                <span class="discount-tag">50% off</span>
                <img src="assets/images/fruits-berries-platter-vegan-cuisine.jpg" class="product-thumb" alt="" />
                <button class="card-btn">add to whislist</button>
              </div>
              <div class="product-info">
                <h2 class="product-brand">Vegetables</h2>
                <p class="product-short-des">a short line about the Food..</p>
                <span class="price">$20</span><span class="actual-price">$40</span>
              </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                  <span class="discount-tag">50% off</span>
                  <img src="assets/images/close-up-photo-oranges-whole-sliced-isolated-white-surface.jpg" class="product-thumb" alt="" />
                  <button class="card-btn">add to whislist</button>
                </div>
                <div class="product-info">
                  <h2 class="product-brand">Vegetables</h2>
                  <p class="product-short-des">a short line about the Food..</p>
                  <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
              </div>
          </div>
    </section>
      <Footer />
    </div>
  );
}

export default Product;
