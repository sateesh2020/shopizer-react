const SHOP_URLS = {
  BASE: '/shopizer',
  HOME: '/shopizer/home',
  CATEGORY: '/shopizer/category',
};

const API_URLS = {
  BASE: 'http://localhost:8080/api/v1',
};

const PRICE_FILTERS = [
  {
    id: 'P001',
    min: 10,
    max: 100,
  },
  {
    id: 'P002',
    min: 100,
    max: 200,
  },
  {
    id: 'P003',
    min: 200,
    max: 300,
  },
  {
    id: 'P004',
    min: 300,
    max: null,
  },
];

const FILTERS = {
  CATEGORY: 'CATEGORY',
  PRICE: 'PRICE',
  MANUFACTURER: 'MANUFACTURER',
};
export { SHOP_URLS, API_URLS, PRICE_FILTERS, FILTERS };
