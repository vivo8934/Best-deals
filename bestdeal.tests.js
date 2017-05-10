describe('Conversion', function(){

it('it should convert string to an array', function(){

var allConversion = Conversion('1 for R3, 2 for R7, 3 for R10, 5 for R14.50.');

});

});
 describe('CostPerAvo', function(){

   it('it should calculate the price per avo in each deal', function(){

 var price = CostPerAvo('3 for R10');
 assertDeep.equal(3.33, price);

   });
 });
