const currentYear = new Date().getFullYear()
document.getElementById('curerntYear').innerText = currentYear

const deleteCard = function (e) {
    e.target.closest('.card').remove()
}

const getBooks = function() {
    fetch('https://striveschool-api.herokuapp.com/books')
    .then((response)=> {
        if (response.ok) {
            return response.json()
        } else          
            throw new Error('File Not Found')
    })
    .then((arrayOfCards)=>{
        console.log('libri: ', arrayOfCards);
        let genCards = () => {
            const cardContainer = document.getElementById('cardContainer')
            arrayOfCards.forEach((card) => {
            cardContainer.innerHTML += `
                <div class="card border-info shadow" style="width: 18rem;">
                        <img src="${card.img}" class="card-img-top overflow-hidden " alt="card title">
                        <div class="card-body d-flex flex-column justify-content-between">
                          <h4 class="card-title">${card.title}</h4>
                          
                          <div class="d-flex justify-content-between align-items-center mt-2">
                                <p class="card-text m-0"><b>€ <span id="price">${card.price}</span></b></p>
                                <a href="#" class="btn btn-success">Add to <span><i class="bi bi-cart4"></i></span></a>
                                <a href="#" class="btn btn-danger" onclick="deleteCard(event)"><i class="bi bi-trash3"></i></a>
                          </div>
                        </div>
                </div>
                `
          

            })
         }
        genCards(arrayOfCards)
    })
    .catch((err)=>{console.log('ERROR: ', err);})
}

getBooks()

