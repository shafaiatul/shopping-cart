var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [

  new Product({
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/819RrYclGzL._SY679_.jpg',
    title: 'Herbal Secrets Maca 500 Mg 250 Caps',
    description: 'Maca (Lepidium meyenii) is grown at high elevatioins in the Andes region of central Peru. It has been used for centuries by indigenous Peruvians as a food source, as well as for increasing stamina and energy',
    price: 19
  }),

  new Product({
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71oIbEyzKmL._SY679_.jpg',
    title: 'Nature\'s Way Ginger Root, 550 mg, 100 Capsules',
    description: 'Ginger root is guaranteed to contain 1.3% essential oils to ease stomach discomfort associated with travel and stimulate digestion. In China and India, ginger was used to cook with.',
    price: 17
  }),

  new Product({
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/81ugwuDsyCL._SY679_.jpg',
    title: 'Saw Palmetto for Prostate Support',
    description: 'Maca (Lepidium meyenii) is grown at high elevatioins in the Andes region of central Peru. It has been used for centuries by indigenous Peruvians as a food source, as well as for increasing stamina and energy',
    price: 13.89
  }),

  new Product({
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61fqph7YhWL._SY679_.jpg',
    title: 'Vitamin D3 with K2 Supplement',
    description: 'HELPS PREVENT VITAMIN D DEFICIENCY: Known as the sunshine vitamin, it is important to maintain healthy levels of Vitamin D in your blood. Additionally, our unique formula provides 94% of your Vitamin K2 daily value in each tablet, which is vital to slow calcification of your arteries. Our Non-GMO formula ensures that you are buying a pure and potent formula with advanced bioavailability.',
    price: 22.99
  }),

  new Product({
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71sfAL8oxAL._SY679_.jpg',
    title: 'Methyl B12, 5000 mcg, 60 Lozenges',
    description: 'Cherry-flavored chewable vitamin B12, promotes healthy homocysteine levels, Contains 5000 micrograms per lozenge',
    price: 13.71
  })

];

var done = 0;

for (var i = 0; i < products.length; i++) {

  products[i].save(function(err, result){
    done++;
    if(done == products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
