function PizzaCart() {
    return {
        smallPrice: 29.99,
        medPrice: 49.99,
        largePrice: 89.99,

        buy: false,

        closePayBtn: false,
        showMessage: '',
        showPayement: false,
        
        smallCount: 0,
        medCount: 0,
        largeCount: 0,

        inputValue: '',

        increment(sizeOfPizza) {
            const occur = `${sizeOfPizza}Count`
            if (sizeOfPizza) {
                this[occur]++
            }
        },

        decrement(sizeOfPizza) {
            const count = `${sizeOfPizza}Count`
            if (sizeOfPizza  && this.smallCount > 0) {
                this[count]--
            }
        },


        grandTotal() {
            return ((this.smallPrice * this.smallCount) + (this.medPrice * this.medCount) +
                (this.largePrice * this.largeCount)).toFixed(2)
        },

        total(sizeOfPizza) {
            const totalPrice = `${sizeOfPizza}Price`
            const occurence = `${sizeOfPizza}Count`
            return this[totalPrice] * this[occurence]
        },

        enoughToPay() {
            if (this.inputValue != '') {
                if (this.inputValue > this.grandTotal()) {
                    this.showMessage = 'Payment success!! :) '
                    this.inputValue = 0
                    closePayBtn = true
                }
                else {
                    this.showMessage = 'Sorry - not enough money!'
                }
            }
        },

        bought(sizeOfPizz) {
            const price = `${sizeOfPizz}Price`
               return this[price]
        }

    }
}
// ensure that AlpineJS is properly loaded
document.addEventListener('alpine:init', () => {
    Alpine.data('pizzaCart', PizzaCart);
});