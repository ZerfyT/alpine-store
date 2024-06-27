// import './style.css'
import javascriptLogo from '/javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import Alpine from 'alpinejs'

window.Alpine = Alpine
Alpine.start()

// Alpine.data('cards', () => ({
//     cards:[],
//     init() {
//         fetch('https://fakestoreapi.com/products')
//         .then(response => response.json())
//         .then(json => this.cards = json)
//         // this.cards = {
//         //     cards: [
//         //         {
//         //             name: 'Milk',
//         //             description: 'Cow\'s milk with butter'
//         //         },
//         //         {
//         //             name: 'Eggs',
//         //             description: 'Eggs with bacon and cheese'
//         //         },
//         //         {
//         //             name: 'Bread',
//         //             description: 'Whole grain bread with milk'
//         //         }
//         //     ]
//         // }
//     }
// }))

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
