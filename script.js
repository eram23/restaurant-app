import { menu } from '/menu.js'

const mainSectionEl = document.getElementById('main-section')
const menuSectionEl = document.getElementById('menu-section')
const orderItemsContainerEl = document.getElementById('order-items')
const totalPriceEl = document.getElementById('total-price')
const totalSectionEl = document.getElementById('total-section')
const completeOrderBtn = document.getElementById('complete-order-btn')
const paymentDetailsForm = document.getElementById('payment-details-form')
const payBtn = document.getElementById('pay-btn')
let orderedItems = ``
let totalPriceCounter = 0
let amountOrdered = 0

// submits payment form and updates menu html
payBtn.addEventListener('click', () => {
    mainSectionEl.innerHTML = `
        <div class="order-complete">
            <p>Thanks ERIK, your order is on the way!</p>
        </div>
        <button class="return-to-menu-btn" data-reset="" type="button">return to menu</button>
    `

    console.log('payment sucessfully submitted!')
})

// reveals payment form 
completeOrderBtn.addEventListener('click', () => {
    paymentDetailsForm.classList.remove('hidden')

    console.log('order complete!')
})

// listens for click to either add or remove item to order
document.addEventListener('click', (e) => {
        if (e.target.dataset.uuid) {
            addItemToOrder(e.target.dataset.uuid)
        } else if( e.target.tagName === 'BUTTON' ) {
            removeItemFromOrder(e)
            e.target.parentElement.remove()

        }
    
        
})

// adds a single item to order and increments count
function addItemToOrder(itemId) {
    menu.forEach((menuItem) => {
        if (itemId === menuItem.uuid) {
            menuItem.ordered++
            // amountOrdered = menuItem.ordered++ 
            menuItem.isOrdered = true
            totalPriceCounter += menuItem.price

            console.log(menuItem.ordered)

            if(menuItem.ordered === 1 && menuItem.ordered < 2) {
                orderedItems = `
                <div class="order-item" id="order-item">
                    <p class="order-item-name">${menuItem.name}</p>
                    <p class="">x${menuItem.ordered}</p>
                    <button class="remove-item-btn" data-remove="${menuItem.uuid}">remove</button>
                    <p class="item-price">$${menuItem.price}</p>
                </div>
                `
            } else {

            }
            
        }
    })

    totalSectionEl.classList.remove('hidden')
    renderOrder()
    renderTotal()
}

// removes a single item from the total order and decrements count
function removeItemFromOrder(e) {
    menu.forEach((menuItem) => {
            
        if(menuItem.uuid === e.target.dataset.remove) {
            menuItem.ordered--
            totalPriceCounter = totalPriceCounter - menuItem.price
            
            console.log('removed 1 of this item!')
        }
                
    })

    if(totalPriceCounter === 0) {
        totalSectionEl.classList.add('hidden')
    }
    renderTotal()
}

// renders the total amount of order
function renderTotal() {
    totalPriceEl.innerHTML = '$' + totalPriceCounter
}

// renders total order
function renderOrder() {
    orderItemsContainerEl.innerHTML += orderedItems
}


