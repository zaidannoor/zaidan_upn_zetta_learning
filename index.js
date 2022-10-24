function BookPurchasing({name,price,category},discount,tax) {
    const amountOfDiscount = price*(discount/100);
    const priceAfterDiscount = price - amountOfDiscount;
    const amountOfTax = priceAfterDiscount * (tax/100);
    const priceAfterTax = priceAfterDiscount - amountOfTax;
    
    return {
        name: name,
        price: price,
        category: category,
        amountOfDiscount: amountOfDiscount,
        priceAfterDiscount: priceAfterDiscount,
        amountOfTax: amountOfTax,
        priceAfterTax: priceAfterTax
    };
}
        
const book = {
    "name": "Buku saku",
    "category": "technology",
    "price": 100000
}

console.log(BookPurchasing(book,10,10))
