class Hamburger {
    // SIZE
    static SIZE_SMALL = { price: 50, calories: 20 }
    static SIZE_BIG = { price: 100, calories: 40 }
    // STUFFING
    static STUFFING_CHEESE = { price: 10, calories: 20 }
    static STUFFING_SALAD = { price: 20, calories: 5 }
    static STUFFING_POTATO = { price: 15, calories: 10 }
    // TOPPING
    static TOPPING_SAUCE = { price: 15, calories: 0 }
    static TOPPING_MAYO = { price: 20, calories: 5 }
    constructor(size, stuffing) {
        this.order = {
            size: size,
            stuffing: stuffing,
            topping: []
        }

    }

    addTopping(newTopping) {
        if (this.order.topping.length >= 2) {
            console.log('Max contains topping')
        } else {
            console.log('Topping added!')
            this.order.topping.push(newTopping)
        }
    }
    calculate() {
        // size.calories + stuffing.calories + topping.calories
        this.totalCalories = (this.order.size.calories) + (this.order.stuffing.calories) + this.order.topping.reduce((a, b) => a + b.calories, this.a = 0)
        return `${this.totalCalories} kCal.`
    }
    calculatePrice() {
        // size.price + stuffing.price + topping.price
        this.totalPrice = (this.order.size.price) + (this.order.stuffing.price) + (this.order.topping.reduce((a, b) => a + b.price, this.a = 0))
        return `${this.totalPrice} $`
    }
}
const cheeseBurger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE)
cheeseBurger.addTopping(Hamburger.TOPPING_MAYO)
console.log('calories:' + cheeseBurger.calculate())
console.log('price: ' + cheeseBurger.calculatePrice())
cheeseBurger.addTopping(Hamburger.TOPPING_SAUCE)
console.log('calories:' + cheeseBurger.calculate())
console.log('price with sauce: ' + cheeseBurger.calculatePrice())