import { menu } from '/menu.js'

const orderItemsContainerEl = document.getElementById('order-items')
const totalPriceEl = document.getElementById('total-price')
let orderedItems = ``
let totalPriceCounter = 0
let amountOrdered = 0

document.addEventListener('click', (e) => {
        if (e.target.dataset.uuid) {
            addItemToOrder(e.target.dataset.uuid)
        } else if( e.target.tagName === 'BUTTON' ) {
            removeItemFromOrder(e)
            e.target.parentElement.remove()

        }
    
        
})

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

    renderOrder()
    renderTotal()
}

function removeItemFromOrder(e) {

    menu.forEach((menuItem) => {
            
        if(menuItem.uuid === e.target.dataset.remove) {
            menuItem.ordered--
            totalPriceCounter = totalPriceCounter - menuItem.price
            
            console.log('removed 1 of this item!')
        }
                
    })

    console.log(totalPriceCounter, e)
    renderTotal()
}

function renderOrder() {
    orderItemsContainerEl.innerHTML += orderedItems
}

function renderTotal() {
    totalPriceEl.innerHTML = '$' + totalPriceCounter
}
