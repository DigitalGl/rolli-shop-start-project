// Обработчики для счетчиков в каталоге
document.querySelectorAll('.counter-wrapper').forEach(counter => {
    const minusBtn = counter.querySelector('[data-action="minus"]');
    const plusBtn = counter.querySelector('[data-action="plus"]');
    const countDisplay = counter.querySelector('[data-counter]');

    minusBtn.addEventListener('click', () => {
        let count = parseInt(countDisplay.textContent);
        if (count > 1) {
            count--;
            countDisplay.textContent = count;
        }
    });

    plusBtn.addEventListener('click', () => {
        let count = parseInt(countDisplay.textContent);
        count++;
        countDisplay.textContent = count;
    });
});

// Добавление товара в корзину
document.querySelectorAll('[data-cart]').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const id = card.getAttribute('data-id');
        const title = card.querySelector('.item-title').textContent;
        const weight = card.querySelector('.price__weight').textContent;
        const price = parseInt(card.querySelector('.price__currency').textContent);
        const imgSrc = card.querySelector('.product-img').src;
        const quantity = parseInt(card.querySelector('[data-counter]').textContent);

        const cartWrapper = document.querySelector('.cart-wrapper');
        const cartEmpty = document.querySelector('[data-cart-empty]');
        let cartItem = cartWrapper.querySelector(`.cart-item[data-id="${id}"]`);

        if (cartItem) {
            // Если товар уже в корзине, обновляем количество
            const cartCountDisplay = cartItem.querySelector('[data-counter]');
            let cartCount = parseInt(cartCountDisplay.textContent);
            cartCount += quantity;
            cartCountDisplay.textContent = cartCount;
        } else {
            // Создаём новый элемент корзины
            cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.setAttribute('data-id', id);
            cartItem.innerHTML = `
                <div class="cart-item__top">
                    <div class="cart-item__img">
                        <img src="${imgSrc}" alt="">
                    </div>
                    <div class="cart-item__desc">
                        <div class="cart-item__title">${title}</div>
                        <div class="cart-item__weight">6 шт. / ${weight}</div>
                        <div class="cart-item__details">
                            <div class="items items--small counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter>${quantity}</div>
                                <div class="items__control" data-action="plus">+</div>
                            </div>
                            <div class="price">
                                <div class="price__currency">${price * quantity} ₽</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            cartWrapper.appendChild(cartItem);
            cartEmpty.classList.add('none'); // Скрываем "Корзина пуста"
        }

        // Обновляем счетчики в корзине
        updateCartCounter(cartItem);

        // Обновляем общую стоимость
        updateTotalPrice();
    });
});

// Обновление счетчиков в корзине
function updateCartCounter(cartItem) {
    const minusBtn = cartItem.querySelector('[data-action="minus"]');
    const plusBtn = cartItem.querySelector('[data-action="plus"]');
    const countDisplay = cartItem.querySelector('[data-counter]');
    const priceDisplay = cartItem.querySelector('.price__currency');
    const basePrice = parseInt(priceDisplay.textContent) / parseInt(countDisplay.textContent);

    minusBtn.addEventListener('click', () => {
        let count = parseInt(countDisplay.textContent);
        if (count > 1) {
            count--;
            countDisplay.textContent = count;
            priceDisplay.textContent = `${basePrice * count} ₽`;
            updateTotalPrice();
        } else {
            cartItem.remove(); // Удаляем товар из корзины
            if (!document.querySelector('.cart-item')) {
                document.querySelector('[data-cart-empty]').classList.remove('none');
            }
            updateTotalPrice();
        }
    });

    plusBtn.addEventListener('click', () => {
        let count = parseInt(countDisplay.textContent);
        count++;
        countDisplay.textContent = count;
        priceDisplay.textContent = `${basePrice * count} ₽`;
        updateTotalPrice();
    });
}

// Обновление общей стоимости
function updateTotalPrice() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;
    cartItems.forEach(item => {
        const price = parseInt(item.querySelector('.price__currency').textContent);
        total += price;
    });
    document.querySelector('.total-price').textContent = total;
}

// Инициализация корзины (если есть статические элементы)
document.querySelectorAll('.cart-item').forEach(updateCartCounter);
updateTotalPrice();