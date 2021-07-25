class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const updater = (item, rate) =>{
  item.quality = item.sellIn < 0 ? item.quality - (rate * 2) : item.quality - rate
  item.quality = item.quality < 0 ?  0 : item.quality
  return item.quality
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
 
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].name != 'Aged Brie' && 
          this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' &&
          this.items[i].name != 'Sulfuras, Hand of Ragnaros'
          ) {
        if (this.items[i].name == 'Conjured Mana Cake'){
          this.items[i].quality = updater(this.items[i], 2)
        }else{
          this.items[i].quality = updater(this.items[i], 1)
        }          
      } else {
        if (this.items[i].quality < 50 ) this.items[i].quality = this.items[i].quality + 1;
        if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.items[i].sellIn < 11 && this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
             }
          if (this.items[i].sellIn < 6 && this.items[i].quality < 50) { 
              this.items[i].quality = this.items[i].quality + 1;
          }
          if (this.items[i].sellIn < 0) {      
            this.items[i].quality = 0;  
          }
        }
      }
    }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}


//NOTES
//In a bid to familiarise with the way the code functions, I will add to the code modifications to accomodate the Conjured item
//Now that the system is complete and I have a better understanding of the way the function is put together I can Refactor


// REFACTOR OPTIONS
// 1) extract the items updateQuality to be different functions
// 2) Refactor in bits, starting with unncessary checks

// The logic could make the update to happen in one pass by first checking if the sellIn is less than 0 first, this will require a decrement of the sellIn at the start of the function  
