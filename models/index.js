// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


//Products belongsTo Category 
Product.belongsTo(Category,{
  foreign_Key: 'category_id'
})

// Categories have many Products
Category.hasMany(Product,{
  foreign_Key: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  through: ProductTag,
  as: 'tags',
  foreign_Key: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Tag,{
  through: ProductTag,
  as: 'tags',
  foreign_Key: 'tag_id'

});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
