const quoteContainer = document.querySelector('.quotes');
const quoteBtn = document.querySelector('.quote-btn');
document.addEventListener('DOMContentLoaded', getQuote)
quoteBtn.addEventListener('click', getQuote)


async function getQuote() {
    fetch('https://quotes-api-self.vercel.app/quote')
  .then(response => response.json())
  .then(data => {
    QArea = `<p>${data.quote}</p> <cite>${data.author}</cite>`
    quoteContainer.innerHTML = QArea
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
}


// const API_KEY = 'Gdbj0D9zv0dym8aIt6GoTA==GTXD59zm8tWfyMxO';

// const API_URL = 'https://api.api-ninjas.com/v1/quotes'

// let options = {
//     method: 'GET',
//     headers: { 'x-api-key': API_KEY }
//   }
  
//   let url = API_URL
  
  
   
       

    // async function getQuote() {
//         await fetch(url,options)
//             .then(res => res.json()) // parse response as JSON
//             .then(data => {
//                 // quoteText.textContent = data.quote;
//                 // quoteAuther.textContent = data.author;
                // QArea = `<p>${data.quote}</p> <cite>${data.author}</cite>`
                // quoteContainer.innerHTML = QArea
//                 console.log(data.quote)
//                 console.log(data)
//             })
//             .catch(err => {
//                 console.log(`error ${err}`)
//             });
//             // try {
//             //     const response = await fetch(url,options)
//             //     const data = await response.json()
//             //     quoteContainer.innerHTML = `<p>${data.quote}</p> <cite>${data.author}</cite>`
//             //     console.log(data);
//             // } catch (error) {
                
//             // }
//         }


