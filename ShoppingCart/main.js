

let shop = document.getElementById('shop');

let generateShop = ()=>{
    return `   <div class="item">
    <img width=220 src="Images/Img-1lehanga.jpg" alt="img">
    <div class="details">
        <h3>Lehnga</h3>
        <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
        <div class="price-quantity">
            <h2>$ 5000</h2>
            <div class="button">
                <i class="bi bi-patch-minus-fill"></i>
                <div class="quantity">0</div>
                <i class="bi bi-patch-plus-fill"></i>
            </div>
        </div>
    </div>
</div>`
}

generateShop();