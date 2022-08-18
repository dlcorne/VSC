describe('Exercise 1', function() {

    it('Should produce reverse factorial of 5', function() {
        let num = 5;
        function reverseFactorial(num) {
            let product = 1,
                n = 1;
                
            while (product <= num) {
                if (product === num) return `${n}!`;
                product *= ++n;
            }
            return 'None';
         }
    });
  
    it('Should produce the doggo list without 25th', function() {
        function Doggo() {
            jv_Object.call(this);
         }
         
         var Doggo_c = class{"Doggo"; "jv_Object"; null};
         let placement = 25;
         Doggo_c.doggo = function (placement)  {
            var str = new ArrayList();
            for (var i = 1; i <= 100; i++) {
               var num = String_c._valueOf(i);
               var dog = String_c._valueOf(placement);
               if (jv_Math_c.abs(i) % 10 === 1) {
                  str.add(num + "st");
               }
               else
               if (jv_Math_c.abs(i) % 10 === 2) {
                  str.add(num + "nd");
               }
               else
               if (jv_Math_c.abs(i) % 10 === 3) {
                  str.add(num + "rd");
               }
               else {
                  str.add(num + "th");
               }
               str.remove(dog + "st");
               str.remove(dog + "nd");
               str.remove(dog + "rd");
               str.remove(dog + "th");
            }
            jv_System_c.out.print(str);
            return str;
         };
         
  })});