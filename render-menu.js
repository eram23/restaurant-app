import { menu } from '/menu.js'

const menuSectionEl = document.getElementById('menu-section')

const menuHtml = menu.map((menuItem) => {
    return (`
    <div class="food-item-option">
        <span class="food-emoji">${menuItem.emoji}</span>
        <div class="food-item-details">
            <p class="food-name"><strong>${menuItem.name}</strong></p>
            <p class="food-desc">${menuItem.description}</p>
            <p>$${menuItem.price}</p>
        </div>
        <button class="add-item-btn" data-uuid="${menuItem.uuid}">+</button>
    </div>
    `)
})

menuSectionEl.innerHTML = `<h2>Menu</h2>` + menuHtml.join('')