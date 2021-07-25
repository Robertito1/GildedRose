const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  const items = [
    new Item("+5 Dexterity Vest", 10, 20),
    new Item("Aged Brie", 2, 0),
    new Item("Elixir of the Mongoose", 5, 7),
    new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    new Item("Conjured Mana Cake", 3, 6),
  ];
  const gildedRose = new Shop(items);
  it("should foo", function() {
    const items = gildedRose.updateQuality();

    expect(items[0]).toEqual({ name: '+5 Dexterity Vest', sellIn: 9, quality: 19 });
    expect(items[1]).toEqual({ name: 'Aged Brie', sellIn: 1, quality: 1 });
    expect(items[2]).toEqual({ name: 'Elixir of the Mongoose', sellIn: 4, quality: 6 });
    expect(items[3]).toEqual({ name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 });
    expect(items[4]).toEqual({ name: 'Sulfuras, Hand of Ragnaros', sellIn: -1, quality: 80 });
    expect(items[5]).toEqual({name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 14, quality: 21});
    expect(items[6]).toEqual({name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 9, quality: 50});
    expect(items[7]).toEqual({name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 4, quality: 50});
    expect(items[8]).toEqual({ name: 'Conjured Mana Cake', sellIn: 2, quality: 3 });
  })
});
