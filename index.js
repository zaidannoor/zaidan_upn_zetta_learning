function BookPurchasing({name,price,category,stock},discount,tax,amount) {
    const amountOfDiscount = price*(discount/100);
    const priceAfterDiscount = price - amountOfDiscount;
    const amountOfTax = priceAfterDiscount * (tax/100);
    const priceAfterTax = priceAfterDiscount - amountOfTax;
    let totalPrice = 0;
    console.log(`Buying ${amount} books`)
    for (let index = amount; index > 0; index--) {
        totalPrice += priceAfterTax;
        stock--;
        console.log(`Buy a book, stock now is ${stock}`)
        if(stock === 0) {
            console.log('this book is out of stock');
            break;
        };
    }
    console.log(`Total Harga = ${totalPrice}`)
    return {
        name: name,
        price: price,
        category: category,
        amountOfDiscount: amountOfDiscount,
        priceAfterDiscount: priceAfterDiscount,
        amountOfTax: amountOfTax,
        priceAfterTax: priceAfterTax,
        purchased: amount,
        totalPrice: totalPrice
    };
}
        
const book = {
    "name": "Buku saku",
    "category": "technology",
    "price": 100000,
    "stock": 5
}

console.log(BookPurchasing(book,10,10,3))
