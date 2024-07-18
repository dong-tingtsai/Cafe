Vue.createApp({
  data() {
    return {
      stores: [],
      currentRegion: "all"
    };
  },
  computed: {
    filteredStores() {
        if(this.currentRegion === "all") {
            return this.stores;
        }

        return this.stores.filter((item) => item.area === this.currentRegion);
    }
},

  methods: {
    setRegion(area) {
        this.currentRegion = area;
        this.activeTab = area;
      },

    fetchData() {
      fetch("./assets/store-locations.json")
        .then((response) => response.json())
        .then((data) => {
          this.stores = data;
        });
    }
  },
  mounted() {
    this.fetchData();
  },
}).mount("#app");
