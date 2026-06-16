hexo.extend.helper.register("getAnimalIcon", function (year) {
  var index = parseInt(year) % 12;
  var icon = {
    0: "smith-colorful-icon-monkey",
    1: "smith-colorful-icon-rooster",
    2: "smith-colorful-icon-dog",
    3: "smith-colorful-icon-boar",
    4: "smith-colorful-icon-rat",
    5: "smith-colorful-icon-ox",
    6: "smith-colorful-icon-tiger",
    7: "smith-colorful-icon-rabbit",
    8: "smith-colorful-icon-dragon",
    9: "smith-colorful-icon-snake",
    10: "smith-colorful-icon-horse",
    11: "smith-colorful-icon-goat",
  };
  return icon[index];
});
