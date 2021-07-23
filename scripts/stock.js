class Stock {

  name = "";
  companyName = "";
  price = "";
  change = "";
  changePct = "";
  marketCap = "";

  constructor() {

  }


  // constructor(name,companyName,price,change,changePct,marketCap){
  //      this.name = name;
  //      this.companyName = companyName;
  //      this.price = price;
  //      this.change = change;
  //      this.changePct = changePct;
  //      this.marketCap = marketCap;
  // }

  setName = name => {
    this.name = name
  }
  setCompanyName = companyName => {
    this.companyName = companyName
  }
  setPrice = price => {
    this.price = price
  }
  setChange = change => {
    this.change = change
  }
  setChangePct = changePct => {
    this.changePct = changePct
  }
  setMarketCap = marketCap => {
    this.marketCap = marketCap
  }


  // update(name,companyName,price,change,changePct,marketCap){
  // 	if(name){
  // 		this.name = name;
  // 	}
  // 	if(companyName){
  // 		this.companyName = companyName;
  // 	}
  // 	if(price){
  // 		this.price = price;
  // 	}
  // 	if(change){
  // 		this.change = change;
  // 	}
  // 	if(changePct){
  // 		this.changePct = changePct;
  // 	}
  // 	if(marketCap){
  // 		this.marketCap = marketCap;
  // 	}
  // }

  update = (name, companyName, price, change, changePct, marketCap) => {
    if (name) {
      this.name = name;
    }
    if (companyName) {
      this.companyName = companyName;
    }
    if (price) {
      this.price = price;
    }
    if (change) {
      this.change = change;
    }
    if (changePct) {
      this.changePct = changePct;
    }
    if (marketCap) {
      this.marketCap = marketCap;
    }
  }

}