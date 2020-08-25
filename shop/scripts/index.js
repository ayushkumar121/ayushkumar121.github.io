
var products = [
    'product-1',
    'product-2',
    'product-3',
    'product-4',
    'product-5',
    'product-6',
    'product-7',
]

var productCard = (name) => `
<div class="product">
<div style="height: 200px; background: coral; border-radius: 16px;">

</div>

<div>
    <h1>${name}</h1>
    <p>Lorem ispum sample description of the product</p>
</div>

<div class="bottom-bar">
    <button>
        <img src="./assets/star.svg" width="38" />
    </button>

    <button class="buy-button">
        <img src="./assets/mall.svg" width="38" />
    </button>
</div>
</div>
`
var sidebarToggle = false

document.querySelector('#search-bar').addEventListener('change', () => {
    var search = document.querySelector('#search-bar').value
    var results = products.filter(str => str.indexOf(search) != -1)

    var htmlResult = ''
    results.forEach(product => {
        htmlResult += productCard(product)
    })

    if (htmlResult != '')
        document.querySelector('#products').innerHTML = htmlResult
    else
        document.querySelector('#products').innerHTML =
            `<h1 style="font-size: 48px; font-weight: 300; text-align:center;">No Results :(</h1>`

    document.querySelectorAll('.product').forEach(product => {

        var buyButton = product.querySelector('.buy-button')
        buyButton.addEventListener('click', () => {
            // DO SOMETHING
        })
    })
})
document.querySelector('#close-sidebar').addEventListener('click', toggleSidebar)
document.querySelector('#sidebar-toggle').addEventListener('click', toggleSidebar)

function toggleSidebar() {
    var sidebar = document.querySelector('#sidebar')

    if (!sidebarToggle)
        sidebar.classList.add('active')
    else
        sidebar.classList.remove('active')

    sidebarToggle = !sidebarToggle
}


function checkout() {
    gsap.to('.popup-conatiner', {
        opacity: 1,
        visibility: "visible",
        ease: Power4.easeOut
    })
    gsap.to('.popup-conatiner .popup', {
        scale: 1,
        opacity: 1
    })
}

function checkoutClose() {
    var tl = gsap.timeline()

    tl
    .to('.popup-conatiner .popup', {
        scale: 0.5,
        opacity: 0
    })
    .to('.popup-conatiner', {
        opacity: 0,
        visibility: "hidden",
        ease: Power4.easeIn
    })
}