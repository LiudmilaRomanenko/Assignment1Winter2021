//create an object literal with members
const coffeOrder = {
    name: {
      myName: "Liudmyla",
      friendName: "Robin",
    },
    size: {
      short: "short",
      tall: "tall",
      grande: "grande",
      venti: "venti",
    },
    typeOfCoffe: {
      latte: "latte,",
      espresso: "espresso,",
      doubleEspresso: "double espresso,",
      americano: "americano,",
      cappuchino: "cappuchino,",
    },
    drizzle: {
      yes: "with drizzle,",
      no: " ",
    },
    whippedCream: {
      yes: "with whipped cream,",
      no: " ",
    },
    sweetener: {
      yes: "with sweetener,",
      no: " ",
    },
    coldFoam: {
      yes: "with cold foam,",
      no: " ",
    },
    dairy: {
      cream: "and with cream.",
      milk: "and with 2% milk/",
      almondMilk: "and with almond milk.",
      withOutDairy: "and no dairy, please.",
    },
  
    //my order will display as allert
    myOrder: function () {
      alert(
        "Order for " +
          this.name.myName +
          ": " +
          this.size.grande +
          " " +
          this.typeOfCoffe.americano +
          " " +
          this.drizzle.no +
          " " +
          this.whippedCream.no +
          " " +
          this.sweetener.yes +
          " " +
          this.coldFoam.no +
          " " +
          this.dairy.almondMilk
      );
    },
    //frends order will display as allert
    frendOrder: function () {
      alert(
        "Order for " +
          this.name.friendName +
          ": " +
          this.size.short +
          " " +
          this.typeOfCoffe.latte +
          " " +
          this.drizzle.no +
          " " +
          this.whippedCream.yes +
          " " +
          this.sweetener.yes +
          " " +
          this.coldFoam.no +
          " " +
          this.dairy.cream
      );
    },
  };
  
  //call both method to display as allert
  coffeOrder.myOrder();
  coffeOrder.frendOrder();
  