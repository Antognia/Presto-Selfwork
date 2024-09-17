fetch('./annunci.json').then((response) => response.json()).then((data) => {
    
    let radioWrapper = document.querySelector('#radioWrapper');
    let cardWrapper = document.querySelector('#cardWrapper');
    
    data.sort((a, b) => a.price - b.price);
    
    function radioCreate() {
        let categories = data.map((annuncio) => annuncio.category);
        let uniqueCategories = Array.from(new Set(categories));
        
        uniqueCategories.forEach(category => {
            let div = document.createElement('div');
            div.classList.add('form-check');
            div.innerHTML = `
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
                <label class="form-check-label" for="${category}">${category}</label>`;
            radioWrapper.appendChild(div); 
        });
    }

    radioCreate();

    function truncateWord(string) {
        if (string.length > 15){
            return string.split(' ')[0] + ' ...';
        }else{
            return string
        }
    };

    function showCards(array) {
        cardWrapper.innerHTML = '';
        array.forEach((annuncio) => {
            let div = document.createElement('div');
            div.classList.add('card-custom', 'text-center');
            div.innerHTML = `
                <img src="${annuncio.homeworld}" alt="immagine random" class="img-fluid">
                <p class="h2" title="${annuncio.name}">${truncateWord(annuncio.name)}</p>
                <p class="h3">${annuncio.category}</p>
                <p class="h4">${annuncio.price}</p>
                <p class="h4">${annuncio.type}</p>`;
            cardWrapper.appendChild(div);
        });
    }

    showCards(data);

    function filterByCategory(array) {
        let categoria =  Array.from( radioButtons ).find((button) => button.checked ).id; 
    
    
    if(categoria != 'All'){
        let filtred = array.filter((annuncio) => annuncio.category == categoria);
        
        return filtred; 
        
    }else{
        return array;  
    };
    }

    let radioButtons = document.querySelectorAll('.form-check-input');

    radioButtons.forEach((button) => {
        button.addEventListener('click', () => {
            GlobalFilter();
        });
    });

    let priceInput = document.querySelector('#priceInput');
    let priceValue = document.querySelector('#priceValue');

    function setPriceInput() {
        let prices = filterByCategory(data).map((annuncio) => +annuncio.price);
        prices.sort((a, b) => a - b);
        let maxPrice = Math.ceil(prices.pop());
        priceInput.max = maxPrice;
        priceInput.value = maxPrice;
        priceValue.innerHTML = maxPrice;
    }

    setPriceInput();

    function filterByPrice(array) {
        return array.filter((annuncio) => +annuncio.price <= priceInput.value);
    }

    priceInput.addEventListener('input', () => {
        priceValue.innerHTML = priceInput.value;
        GlobalFilter();
    });

    let wordInput = document.querySelector('#wordInput');

    function filterByWord(array) {
        return array.filter((annuncio) => annuncio.name.toLowerCase().includes(wordInput.value.toLowerCase()));
    }

    wordInput.addEventListener('input', () => {
        GlobalFilter();
    });

    function GlobalFilter() {
        let filteredByCategory = filterByCategory(data);
        let filteredByPrice = filterByPrice(filteredByCategory);
        let filteredByWord = filterByWord(filteredByPrice);
        showCards(filteredByWord);
    }
});
