Vue.createApp({
  data() {
    return {
      products: [],
      showLightbox: false,
      selectedProduct: null,
      checkBar: false,
      cartlist: false,
      cartItems: []
    };
  },
  computed: {
    cartCart() {
      return this.cartItems.reduce((total, item) => total + item.count, 0);
    },
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price * item.count, 0);
    }
  },
  methods: {
    subPrice(index) {
     const item = this.cartItems[index];
     return item.price * item.count;
    },
    openCartlist() {
      this.cartlist = true;
     },
     closeCartlist() {
      this.cartlist = false;
     },
    addCart(product) {
      const existingItem = this.cartItems.find(item => item.id === product.id);
      if(existingItem) {
        // 如果商品已存在，增加數量
        existingItem.count += product.count;
      } else {
        // 如果商品不存在，添加新商品到購物車
        this.cartItems.push({...product});
      }
      this.checkBar= true;
      this.showLightbox = false;
    },
   reduce(product) {
    if(product.count > 1) {
      product.count--;
    }
   },
   add(product) {
     product.count++;
   },
  removeItem(product) {
    if(!product) return
    const index = this.cartItems.findIndex(item => item.id === product.id);
     // 移除陣列第幾個位置,一個
    this.cartItems.splice(index, 1);
  },
   openLightbox(product) {
    this.selectedProduct = product;
    this.showLightbox = true;
   },
   closeLightbox() {
    this.showLightbox = false;
   },
    fetchData() {
      fetch("./assets/product.json")
        .then((response) => response.json())
        .then((data) => {
          this.products = data;
        });
    },
  },
  mounted() {
    this.fetchData();
  },
}).mount("#app");
