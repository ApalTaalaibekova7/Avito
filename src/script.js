const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-box input')
const cardWrapper = document.querySelector('.content-main__list')

const cardArray = [
    {
        id: 0,
        title: 'Цветы',
        price: '170 Com',
        address: 'Бишкек, Ак-Ордо',
        date: '31.12.2024 23:00', 
        img: './images/Mango.jpg'
    },
    {
        id: 1,
        title: 'Бишкек',
        price: '177 Com',
        address: 'Бишкек, Ак-Ордо',
        date: '31.12.2024 23:00', 
        img: './images/flower.png'
    },
    {
        id: 2,
        title: 'Ак-Ордо',
        price: '77 Com',
        address: 'Бишкек, Ак-Ордо',
        date: '31.12.2024 23:00', 
        img: './images/Mango.jpg'
    },
    {
        id: 3,
        title: 'Токтогул',
        price: '17 Com',
        address: 'Бишкек, Ак-Ордо',
        date: '31.12.2024 23:00', 
        img: './images/flower.png'
    },
    {
        id: 4,
        title: 'Уч-Терек',
        price: '178 Com',
        address: 'Бишкек, Ак-Ордо',
        date: '31.12.2024 23:00', 
        img: './images/Mango.jpg'
    },
    {
        id: 5,
        title: 'Османие',
        price: '777 Com',
        address: 'Бишкек, Ак-Ордо',
        date: '31.12.2024 23:00', 
        img: './images/flower.png'
    },
]

const render = (cardList) => {
    cardWrapper.innerHTML = ''

    cardList.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="./product.html" class="content-main__list-item">
                <div class="content-main__list-item--img">
                    <img src="${item.img}" alt="${item.img}">
                </div>
                <h5 class="content-main__list-item--title">
                ${item.title}
                </h5>
                <strong class="content-main__list-item--price">${item.price}</strong>
                <div class="content-main__list-item--desc-box">
                    <span class="content-main__list-item--desc">${item.address}
                    </span>
                    <span class="content-main__list-item--desc">${item.date}
                    </span>
                </div>
            </a>

        `)
    })
}  
    const filteredArray = (array, value) => {
        return array.filter((item) => {

            // return item.title.includes(value) || item.price.includes(value)

        return item.title.toLowerCase().includes(value.toLowerCase()) || 
        item.price.toLowerCase().includes(value.toLowerCase())
        
        })
    }

cardWrapper.style.justifyContent = 'flex-start'
cardWrapper.style.gap = '30px'

render(cardArray)

// searchBtn.addEventListener('click', () => {
//     render(filteredArray(cardArray, searchInput.value));
    
////////////////////////////////////////////////////////

    // Событие input для обновления результатов поиска при вводе каждой буквы
searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim()
    render(filteredArray(cardArray, query))
})


