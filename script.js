
let add_to_cart = document.querySelectorAll(".add-to-cart")

add_to_cart.forEach((element) => {
    element.addEventListener("click", () => {
        let added_cart_box = document.querySelector(".added-cart-box");
        let your_shown_cart = document.querySelector(".your-shown-cart");
        let food_product = element.closest(".food-product")
        let cart_number_items = food_product.querySelector(".cart-number-items")
        let total_order_confirm = document.querySelector(".total-order-confirm")
        let order_price = document.querySelector(".order-price")
        let your_cart_number = document.querySelector(".your-cart_number")


        cart_number_items.style.display = "flex"
        added_cart_box.style.display = "none"
        your_shown_cart.style.display = "block"
        element.style.display = "none"
        total_order_confirm.style.display = "flex"


        let specific_name = food_product.querySelector(".specific-name")
        let price = food_product.querySelector(".price")

        let ordered_item = document.createElement("div")
        ordered_item.className = "ordered-item";
        let dish_name = document.createElement("span")
        dish_name.className = "dish-name";
        let price_number_close = document.createElement("div")
        price_number_close.className = "price-number-close";
        let price_number = document.createElement("div")
        price_number.className = "price-number";
        let number_times = document.createElement("span")
        number_times.className = "number-times";
        let price_number_price = document.createElement("div")
        price_number_price.className = "price-number-price";
        let fixed_price = document.createElement("span")
        fixed_price.className = "fixed-price";
        let varying_price = document.createElement("span")
        varying_price.className = "varying-price";
        let close = document.createElement("img")
        close.className = "close";
        close.src = "svg/icon-remove-item.svg"


        your_shown_cart.appendChild(ordered_item)
        ordered_item.appendChild(dish_name)
        ordered_item.appendChild(price_number_close)
        price_number_close.appendChild(price_number)
        price_number_close.appendChild(close)
        price_number.appendChild(number_times)
        price_number.appendChild(price_number_price)
        price_number_price.appendChild(fixed_price)
        price_number_price.appendChild(varying_price)


        dish_name.innerHTML = specific_name.innerHTML
        fixed_price.innerHTML = "@" + price.innerHTML
        varying_price.innerHTML = price.innerHTML
        number_times.innerHTML = "1x"

        let priceString1 = order_price.innerHTML.replace('$', '');
        let priceString2 = price.innerHTML.replace('$', '');

        let total_price = parseFloat(priceString1);
        let price_ = parseFloat(priceString2);

        total_price += price_

        let TotalformattedPrice = total_price.toFixed(2);
        order_price.innerHTML = `$${TotalformattedPrice}`

        let number = parseInt(your_cart_number.innerHTML, 10);
        number++;
        your_cart_number.innerHTML = `${number}`


        let food_image = food_product.querySelector(".food-image")
        food_image.style.border = "3px solid rgb(219, 58, 58)"



        close.addEventListener("click", clicked)
        function clicked() {

            let ordered_item = close.closest(".ordered-item")
            let dish_name = ordered_item.querySelector(".dish-name")
            let number_times = ordered_item.querySelector(".number-times")
            let specific_name = document.querySelectorAll(".specific-name")
            let varying_price = ordered_item.querySelector(".varying-price")
            let order_price = document.querySelector(".order-price")
            let your_cart_number = document.querySelector(".your-cart_number")
            let added_cart_box = document.querySelector(".added-cart-box")
            let total_order_confirm = document.querySelector(".total-order-confirm")

            let Total_priceString = order_price.innerHTML.replace('$', '');
            let priceString = varying_price.innerHTML.replace('$', '');
            let numbertimeString = number_times.innerHTML.replace('x', '');
            let cart = your_cart_number.innerHTML
            let price_cut = parseFloat(priceString);
            let TotaL_price = parseFloat(Total_priceString);
            let number = parseInt(numbertimeString, 10)
            let Cart_number = parseInt(cart, 10)

            Cart_number -= number
            your_cart_number.innerHTML = `${Cart_number}`

            TotaL_price -= price_cut
            let TotalformattedPrice = TotaL_price.toFixed(2);
            order_price.innerHTML = `$${TotalformattedPrice}`


            if (Cart_number === 0) {
                total_order_confirm.style.display = "none"
                added_cart_box.style.display = "flex"
            }


            specific_name.forEach(name => {
                if (dish_name.innerHTML === name.innerHTML) {

                    let food_product = name.closest(".food-product")
                    let number_items = food_product.querySelector(".number-items")
                    let cart_number_items = food_product.querySelector(".cart-number-items")
                    let add_to_cart = food_product.querySelector(".add-to-cart")
                    let food_image = food_product.querySelector(".food-image")

                    cart_number_items.style.display = "none"
                    add_to_cart.style.display = "flex"
                    number_items.innerHTML = "1"

                    food_image.style.border = "none"

                }
            });

            ordered_item.remove()
        }


    })
});


let decreement = document.querySelectorAll(".decreement")
let increement = document.querySelectorAll(".increement")


decreement.forEach(element => {
    element.addEventListener("click", () => {
        let food_product = element.closest(".food-product")
        let food_image = food_product.querySelector(".food-image")
        let cart_number_items = food_product.querySelector(".cart-number-items")
        let number_items = food_product.querySelector(".number-items")
        let add_to_cart = food_product.querySelector(".add-to-cart")
        let specific_name = food_product.querySelector(".specific-name")
        let dish_name = document.querySelectorAll(".dish-name")
        let order_price = document.querySelector(".order-price")
        let your_cart_number = document.querySelector(".your-cart_number")
        let total_order_confirm = document.querySelector(".total-order-confirm")
        let added_cart_box = document.querySelector(".added-cart-box")

        let number_cart = parseInt(your_cart_number.innerHTML, 10);
        number_cart--;
        your_cart_number.innerHTML = `${number_cart}`

        if (number_cart === 0) {
            total_order_confirm.style.display = "none"
            added_cart_box.style.display = "flex"
        }

        dish_name.forEach(dish => {
            if (dish.innerHTML === specific_name.innerHTML) {

                console.log(dish.innerHTML);

                let ordered_item = dish.closest(".ordered-item")
                let number_times = ordered_item.querySelector(".number-times")
                let fixed_price = ordered_item.querySelector(".fixed-price")
                let varying_price = ordered_item.querySelector(".varying-price")

                let priceString = varying_price.innerHTML.replace('$', '');
                let priceString2 = fixed_price.innerHTML.replace('@$', '');
                let price = parseFloat(priceString);
                let price2 = parseFloat(priceString2);

                let priceString3 = order_price.innerHTML.replace('$', '');
                let total_price = parseFloat(priceString3);
                console.log("Total Price: " + total_price);

                let number = parseInt(number_items.innerHTML, 10);

                if (number === 1) {

                    let priceString3 = order_price.innerHTML.replace('$', '');

                    let total_price = parseFloat(priceString3);


                    total_price -= price2

                    let TotalformattedPrice = total_price.toFixed(2);
                    order_price.innerHTML = `$${TotalformattedPrice}`


                    cart_number_items.style.display = "none";
                    add_to_cart.style.display = "flex"

                    let ordered_item = dish.closest(".ordered-item")
                    ordered_item.remove()

                    number_items.innerHTML = "1"
                    food_image.style.border = "none"


                }
                else {
                    let number = parseInt(number_items.innerHTML, 10);
                    number--;

                    number_items.innerHTML = `${number}`
                    number_times.innerHTML = `${number}x`

                    price -= price2
                    let formattedPrice = price.toFixed(2);

                    varying_price.innerHTML = `$${formattedPrice}`

                    let priceString3 = order_price.innerHTML.replace('$', '');

                    let total_price = parseFloat(priceString3);
                    total_price -= price2

                    let TotalformattedPrice = total_price.toFixed(2);
                    order_price.innerHTML = `$${TotalformattedPrice}`

                    console.log("Else price: " + TotalformattedPrice);

                }


            }

        });

    })
});



increement.forEach(element => {
    element.addEventListener("click", () => {

        let food_product = element.closest(".food-product")
        let number_items = food_product.querySelector(".number-items")
        let specific_name = food_product.querySelector(".specific-name")
        let order_price = document.querySelector(".order-price")
        let dish_name = document.querySelectorAll(".dish-name")
        let your_cart_number = document.querySelector(".your-cart_number")

        let number = parseInt(number_items.innerHTML, 10);
        number++;
        number_items.innerHTML = `${number}`

        let number_cart = parseInt(your_cart_number.innerHTML, 10);
        number_cart++;
        your_cart_number.innerHTML = `${number_cart}`

        dish_name.forEach(dish => {
            if (dish.innerHTML === specific_name.innerHTML) {

                let ordered_item = dish.closest(".ordered-item")
                let number_times = ordered_item.querySelector(".number-times")

                number_times.innerHTML = `${number}x`

                let fixed_price = ordered_item.querySelector(".fixed-price")
                let varying_price = ordered_item.querySelector(".varying-price")

                let priceString = varying_price.innerHTML.replace('$', '');
                let priceString2 = fixed_price.innerHTML.replace('@$', '');

                let price = parseFloat(priceString);
                let price2 = parseFloat(priceString2);

                price += price2
                let formattedPrice = price.toFixed(2);
                varying_price.innerHTML = `$${formattedPrice}`

                let priceString3 = order_price.innerHTML.replace('$', '');

                let total_price = parseFloat(priceString3);
                total_price += price2

                let TotalformattedPrice = total_price.toFixed(2);
                order_price.innerHTML = `$${TotalformattedPrice}`


            }
        });
    })
});



let confirm_order_button = document.querySelector(".confirm-order")

confirm_order_button.addEventListener("click", () => {

    confirm_order_button.style.pointerEvents = "none";
    decreement.forEach(decrease => {
        decrease.style.pointerEvents = "none";
    });
    increement.forEach(increase => {
        increase.style.pointerEvents = "none";
    });

    let ordered_item = document.querySelectorAll(".ordered-item")
    let confirm_order_box = document.querySelector(".confirm-order-box")
    let your_confirm_orders = document.querySelector(".your-confirm-orders")
    let order_total_amount = document.querySelector(".order-total-amount")
    let overlay = document.querySelector(".overlay")
    let body = document.body

    overlay.style.display = "block"
    overlay.style.height = `${body.offsetHeight}px`

    console.log("OVERLAY: " + overlay.offsetHeight);


    confirm_order_box.style.display = "flex"

    ordered_item.forEach(element => {

        let order = element.cloneNode(true)

        order.style.display = "flex"
        order.style.flexDirection = "row"

        order.style.gap = "10px"
        order.style.paddingTop = "15px"
        order.style.paddingBottom = "15px"
        order.style.fontFamily = "Red Hat Text"
        order.style.fontWeight = "bold"
        order.className = "order"

        your_confirm_orders.appendChild(order)

        order.style.borderBottom = `2px solid rgb(233, 227, 227)`

        let dish_name = order.querySelector(".dish-name")
        let price_number_close = order.querySelector(".price-number-close")
        let price_number = price_number_close.querySelector(".price-number")
        let price_number_price = price_number.querySelector(".price-number-price")
        let varying_price = price_number_price.querySelector(".varying-price")

        let div = document.createElement("div")
        div.className = "order-item-info"
        div.style.width = "85%"

        order.appendChild(div)
        div.appendChild(dish_name)
        div.appendChild(price_number_close)

        varying_price.style.color = "black"
        varying_price.style.fontSize = "13px"
        varying_price.style.fontFamily = "Red Hat Text"
        varying_price.style.fontWeight = "700"


        let close = price_number_close.querySelector(".close")

        price_number_close.removeChild(close)
        price_number_close.appendChild(varying_price)

        let specific_name = document.querySelectorAll(".specific-name")

        specific_name.forEach(name => {
            if (name.innerHTML === dish_name.innerHTML) {

                let food_info = name.closest(".food-info")
                let food_product = food_info.closest(".food-product")
                let food_image = food_product.querySelector(".food-image")

                let food = food_image.cloneNode(true)
                food.style.border = "none"

                order.insertBefore(food, div)

                food.style.width = "40px"
                food.style.height = "40px"
            }

        });
        function Resize() {
            if (window.innerWidth < 1050) {
                order.style.paddingTop = "10px"
                order.style.paddingBottom = "10px"
                dish_name.style.fontSize = "14px"
            }
            else {
                order.style.paddingTop = "15px"
                order.style.paddingBottom = "15px"
                dish_name.style.fontSize = "16px"
            }
        }
        Resize()
        window.addEventListener("resize", Resize)

    });

    let total_order_price = order_total_amount.cloneNode(true)
    your_confirm_orders.appendChild(total_order_price)

    total_order_price.style.paddingTop = "15px"
    total_order_price.style.paddingBottom = "15px"

    your_confirm_orders.style.paddingLeft = "20px"
    your_confirm_orders.style.paddingRight = "20px"

    let order_price = total_order_price.querySelector(".order-price")
    order_price.style.fontSize = "18px"

    function Resize() {
        if (window.innerWidth < 1050) {
            total_order_price.style.paddingTop = "10px"
            total_order_price.style.paddingBottom = "10px"
        }
        else {
            total_order_price.style.paddingTop = "15px"
            total_order_price.style.paddingBottom = "15px"
        }
    }
    Resize()
    window.addEventListener("resize", Resize)

})




let start_new_order = document.querySelector(".start-new-order")

start_new_order.addEventListener("click", () => {

    let ordered_item = document.querySelectorAll(".ordered-item")
    let overlay = document.querySelector(".overlay")
    overlay.style.display = "none"

    ordered_item.forEach(element => {

        let dish_name = element.querySelector(".dish-name")
        let specific_name = document.querySelectorAll(".specific-name")

        specific_name.forEach(name => {
            if (name.innerHTML === dish_name.innerHTML) {

                let food_info = name.closest(".food-info")
                let food_product = food_info.closest(".food-product")
                let cart_number_items = food_product.querySelector(".cart-number-items")
                let number_items = food_product.querySelector(".number-items")
                let food_image = food_product.querySelector(".food-image")

                number_items.innerHTML = "1"
                let add_to_cart = food_product.querySelector(".add-to-cart")
                add_to_cart.style.display = "flex"
                cart_number_items.style.display = "none"
                food_image.style.border = "none"

            }
        });

        element.remove()

    });


    let your_cart_number = document.querySelector(".your-cart_number")
    let total_order_confirm = document.querySelector(".total-order-confirm")
    let order_price = total_order_confirm.querySelector(".order-price")
    let added_cart_box = document.querySelector(".added-cart-box")
    let your_confirm_orders = document.querySelector(".your-confirm-orders")
    let confirm_order_box = document.querySelector(".confirm-order-box")

    your_cart_number.innerHTML = "0"
    order_price.innerHTML = "$0"
    total_order_confirm.style.display = "none"
    added_cart_box.style.display = "flex"
    your_confirm_orders.innerHTML = ""
    confirm_order_box.style.display = "none"

    confirm_order_button.style.pointerEvents = "auto";
    decreement.forEach(decrease => {
        decrease.style.pointerEvents = "auto";
    });
    increement.forEach(increase => {
        increase.style.pointerEvents = "auto";
    });

})



function Resize() {
    let body = document.body
    body.style.height = "auto"
    console.log("Body: " + body.offsetHeight);

    let food_product = document.querySelectorAll(".food-product")

    food_product.forEach(element => {
        let food_image = element.querySelector(".food-image")
            if (window.innerWidth < 600) {
                food_image.src = food_image.src.replace("desktop", "mobile");
            }
            else {
                if (food_image.src.includes("mobile")) {
                    food_image.src = food_image.src.replace("mobile", "desktop");
                }
            }
    });

}

Resize()
window.addEventListener("resize", Resize)






