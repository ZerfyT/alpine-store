// import './style.css'
import javascriptLogo from '/javascript.svg'
import viteLogo from '/vite.svg'
import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'
 

window.Alpine = Alpine
Alpine.start()
Alpine.plugin(intersect)

// Alpine.data('cards', () => ({
//     cards:[],
//     init() {
//         fetch('https://fakestoreapi.com/products')
//         .then(response => response.json())
//         .then(json => this.cards = json)
//         this.cards = {
//             cards: [
//                 {
//                     name: 'Milk',
//                     description: 'Cow\'s milk with butter'
//                 },
//                 {
//                     name: 'Eggs',
//                     description: 'Eggs with bacon and cheese'
//                 },
//                 {
//                     name: 'Bread',
//                     description: 'Whole grain bread with milk'
//                 }
//             ]
//         }
//     }
// }))

// Alpine.data('cartItems', () => ({
//     items: [],
// }))
// Alpine.data('cart', () => ({
    
// }))
