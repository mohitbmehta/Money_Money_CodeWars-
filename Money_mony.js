function calculateYears(principal, interest, tax, desired) {
    var year;
    for(year = 0;; year++ ){
            if(principal >= desired){
                return year;
            }
            
            var afterInterest = principal * interest;
            
            var currentTaxRate = afterInterest * tax;
            
            principal = principal + afterInterest - currentTaxRate;
        }
    }