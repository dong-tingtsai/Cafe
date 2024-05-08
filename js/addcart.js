let currentItemPrice;
let currentQuantity = 1;
let cartCount = 0;
let totalPrice = 0;
// let productCards = document.querySelectorAll(".lightbox_cart");

function openModal() {
  // currentItemPrice = price;
  // document.getElementsByClassName("product_money").innerHTML = "Price: $" + currentItemPrice;
  // let currentQuantity = document.getElementsByClassName("qty").value;
  document.getElementById("lightbox_cart").style.display = "block";
  // productCards.forEach((productCard) => {
  //     productCard.style.display = "block";
  // })
 
}
//light box selected 
// let selectedItems = document.querySelectorAll('.product-pic')

// selectedItems.forEach((selectedItem,i) => {
//   selectedItem.addEventListener('click',() => {
//     productCards[i].style.display = "block";
//   })
// })

function closeModal(){
  document.getElementById("lightbox_cart").style.display = "none";
//   productCards.forEach((productCard) => {
//     productCard.style.display = "none";
// })
}

let count = document.querySelector('.qty')
function increaseQuantity() {
  currentQuantity++;
  // console.log(currentQuantity)
  count.value = currentQuantity;
}

function decreaseQuantity() {
  if (currentQuantity > 1) {
    currentQuantity--;
    count.value = currentQuantity;
  }
}


function updatePrice() {
    var size = document.getElementById("sizeSelect").value;
    var price
    // 根據選擇的尺寸更新價格
    switch (size) {
        case "M":
            price = 60;
            break;
        case "L":
            price = 70;
            break;
    }

    // 將價格顯示在網頁上
    document.getElementById("priceDisplay").innerText =  "$" + price;
}


function addToCart() {
   let qty = parseInt( count.value);
   document.querySelector(".check-cart-bar").style.display = "block";
  //  const subtotal = currentItemPrice * qty;
  //  const itemHTML = "<li>Price: $" + currentItemPrice + ", Quantity: <span class='highlight'>" + qty + "</span>, Subtotal: $" + subtotal.toFixed(2) + " <img src='trash.png' onclick='removeItem(this)'></li>";
 //   const itemHTML = "<li>Price: $" + currentItemPrice + ", Quantity: <span class='highlight'>" + qty + "</span>, Subtotal: $" + subtotal.toFixed(2) + " <img src='trash.png' onclick='removeItem(this)'></li>";
  //  document.getElementById("cart-items").innerHTML += itemHTML;
  //  updateTotal(subtotal);
  closeModal();
  updateCartCount(qty);
}

function updateCartCount(quantity) {
  cartCount += quantity;
  document.getElementById("cart-count").innerText = cartCount;
}

// function updateTotal(subtotal) {
//   totalPrice += subtotal;
//   document.getElementById("total").innerHTML = "Total: $" + totalPrice.toFixed(2);
// }

function openCart() {
  document.getElementById("lightbox-cartlist").style.display = "block";
}

function closeCart() {
  document.getElementById("lightbox-cartlist").style.display = "none";
}

// function removeItem(item) {
//   const li = item.parentNode;
//   const subtotal = parseFloat(li.innerText.split("$")[3]);
//   li.parentNode.removeChild(li);
//   updateTotal(-subtotal);
//   const quantity = parseInt(li.innerText.split(": ")[1]);
//   updateCartCount(-quantity);
// }



// function checkout() {
//   alert("Total: $" + totalPrice.toFixed(2) + "\nThank you for your order!");

//   document.getElementById("cart-items").innerHTML = "";
//   totalPrice = 0;
//   document.getElementById("total").innerHTML = "Total: $" + totalPrice.toFixed(2);
//   cartCount = 0;
//   document.getElementById("cart-count").innerText = cartCount;
// }



// function showLightBox_cart(){ 
//     let lightBox_cart = document.getElementById("lightbox_cart");
//     lightBox_cart.style.display = "block";
      
//   }
  
//   function cancelcart(){
//     let lightBox_cart = document.getElementById("lightbox_cart");
//     lightBox_cart.style.display = "none";
//   }
  
//   function init_cart(){

//     document.getElementById("cart-pic").onclick = showLightBox_cart;
  
//   }; 
  
//   window.addEventListener("load", init_cart, false);


//   window.addEventListener("load", function(){
//     let btnMinus = document.getElementsByClassName("fa-minus");
// 	let qty = document.getElementsByClassName("qty");
// 	let btnPlus = document.getElementsByClassName("fa-plus");

// 	for(let i=0; i<btnMinus.length; i++){
// 		btnMinus[i].onclick = function(){
// 	     	if(parseInt(qty[i].value)>=1){
// 				qty[i].value = parseInt(qty[i].value)-1;
// 		      }
// 			}
// 	}

// 	for(let i=0; i<btnPlus.length; i++){
// 		btnPlus[i].onclick = function(){
// 			qty[i].value = parseInt(qty[i].value)+1;
// 		}
// 	}


// })


// function updatePrice() {
//     var size = document.getElementById("sizeSelect").value;
//     var price;

//     // 根據選擇的尺寸更新價格
//     switch (size) {
//         case "M":
//             price = 60;
//             break;
//         case "L":
//             price = 70;
//             break;
//     }

//     // 將價格顯示在網頁上
//     document.getElementById("priceDisplay").innerText =  "$" + price;
// }


// function addToCart() {
//     const quantity = parseInt(document.getElementsByClassName("qty").value);
//     const subtotal = currentItemPrice * quantity;
//     const itemHTML = "<li>Price: $" + currentItemPrice + ", Quantity: <span class='highlight'>" + quantity + "</span>, Subtotal: $" + subtotal.toFixed(2) + " <img src='trash.png' onclick='removeItem(this)'></li>";
//     document.getElementById("cart-items").innerHTML += itemHTML;
//     updateTotal(subtotal);
//     closeModal();
//     updateCartCount(quantity);
//   }