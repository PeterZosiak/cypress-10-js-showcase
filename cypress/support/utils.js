const cities = ['Berlin', 'London', 'New York', 'Paris', 'Tokyo', 'Toronto', 'Vancouver', 'Zurich', 'Prague'];
const companies = ['Apple', 'Google', 'Microsoft', 'Facebook', 'Twitter', 'Amazon', 'IBM', 'Oracle', 'Samsung', 'Intel'];

export default class Utils {
  getRandomString(length = 5) {
    return Math.random().toString(36).substring(2, length + 2);
  }

  getRandomCity() {
    return cities[Math.floor(Math.random() * cities.length)];
  }

  getRandomCompanyName() {
    return companies[Math.floor(Math.random() * cities.length)];
  }

  getRandomEmail() {
    return `qa+${this.getRandomNumber()}@company.com`;
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 100000);
  }
}