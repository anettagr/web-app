import * as types from '../actions/actionTypes';
const data = '{"products":[{"id":1,"title":"Vintage Armchair","description":"A plush vintage armchair in mint condition, perfect for adding a touch of retro elegance to your living space.","picture":"homework.mountbirch.com/images/item1.jpg","price":250.4,"dateAdded":"2024-01-02","category":"Furniture"},{"id":2,"title":"Antique Vase","description":"This exquisite antique vase features traditional hand-painted designs and is a collector\'s dream.","picture":"homework.mountbirch.com/images/item2.jpg","price":10.4,"dateAdded":"2024-01-03","category":"Home Decor"},{"id":3,"title":"Hardcover Book Set","description":"A set of classic literature in hardcover editions, with beautifully designed jackets and bindings.","picture":"homework.mountbirch.com/images/item3.jpg","price":55.1,"dateAdded":"2024-01-04","category":"Books"},{"id":4,"title":"Professional Camera","description":"Capture life\'s moments with this professional-grade camera, boasting high-resolution imagery and user-friendly controls.","picture":"homework.mountbirch.com/images/item4.jpg","price":4000,"dateAdded":"2024-01-02","category":"Electronics"},{"id":5,"title":"Gourmet Coffee Beans","description":"These gourmet coffee beans are sourced from the finest small-lot farms around the world, ensuring a rich and unique flavor profile.","picture":"homework.mountbirch.com/images/item5.jpg","price":25.4,"dateAdded":"2024-01-01","category":"Food"},{"id":6,"title":"Ergonomic Office Chair","description":"Designed for comfort and style, this office chair offers excellent back support and adjusts to your body.","picture":"homework.mountbirch.com/images/item6.jpg","price":250,"dateAdded":"2024-01-02","category":"Office Furniture"},{"id":7,"title":"Bluetooth Headphones","description":"Experience high-quality sound without the wires. These Bluetooth headphones offer noise cancellation and long battery life.","picture":"homework.mountbirch.com/images/item7.jpg","price":89.99,"dateAdded":"2024-01-03","category":"Electronics"},{"id":8,"title":"Organic Matcha Tea","description":"Sourced from Japan, this organic matcha tea is rich in flavor and packed with antioxidants.","picture":"homework.mountbirch.com/images/item8.jpg","price":20.5,"dateAdded":"2024-01-04","category":"Food"},{"id":9,"title":"Yoga Mat","description":"High-density foam yoga mat with a non-slip surface for stability during your practice.","picture":"homework.mountbirch.com/images/item9.jpg","price":35,"dateAdded":"2024-01-05","category":"Fitness"},{"id":10,"title":"Watercolor Paint Set","description":"This set includes 24 vibrant colors, perfect for beginners and experienced artists alike.","picture":"homework.mountbirch.com/images/item10.jpg","price":19.99,"dateAdded":"2024-01-06","category":"Arts & Crafts"},{"id":11,"title":"Smart Watch","description":"Keep track of your fitness goals and stay connected with this stylish smart watch.","picture":"homework.mountbirch.com/images/item11.jpg","price":199.99,"dateAdded":"2024-01-07","category":"Electronics"},{"id":12,"title":"Leather Wallet","description":"Crafted from genuine leather, this wallet combines elegance with practicality.","picture":"homework.mountbirch.com/images/item12.jpg","price":49.99,"dateAdded":"2024-01-03","category":"Accessories"},{"id":13,"title":"Stainless Steel Water Bottle","description":"Keep your drinks hot or cold for hours with this durable stainless steel water bottle.","picture":"homework.mountbirch.com/images/item13.jpg","price":25,"dateAdded":"2024-01-09","category":"Outdoor Gear"},{"id":14,"title":"Scented Candle","description":"Create a warm and inviting atmosphere with this scented candle, available in various fragrances.","picture":"homework.mountbirch.com/images/item14.jpg","price":14.99,"dateAdded":"2024-01-11","category":"Home Decor"},{"id":15,"title":"Graphic T-Shirt","description":"Made from soft, sustainable fabric, this t-shirt features a unique design by an independent artist.","picture":"homework.mountbirch.com/images/item15.jpg","price":30,"dateAdded":"2024-01-02","category":"Apparel"}]}';
const productsData = JSON.parse(data).products;

const initialState = {
  products: productsData,
  isLoading: false,
  error: null,
}

const products = (state = { ...initialState }, action) => {
  switch (action.type) {
    case types.FILTER_DATA_ACTION_STARTED: {
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    }
    case types.FILTER_DATA_ACTION_COMPLETED: {
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      }
    }
    case types.FILTER_DATA_ACTION_FAILED: {
      return {
        ...state,
        isLoading: false,
        products: [],
        error: action.payload,
      }
    }
    default:
      return state;
  }
}

export default products;