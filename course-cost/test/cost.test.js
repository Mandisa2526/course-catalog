describe("Test my courseCost function" , function(){
    it("it should return Invalid code status ,when the code passed is not available inside the object" , function(){
       var result = {
            status : "Invalid code"
        }
        assert.deepEqual(result, courseCost("r2", null) );
    });
    it("it should return Invalid day status ,when the date passed is not available" , function(){
        var result2 = {
            status : "Invalid day"
          }
         assert.deepEqual(result2, courseCost("r1", "2023-12-40") );
     });
     it("it should return the  discount received ,when that discount is passed on the parametes" , function(){
       
        
        var result = {
            status : "success",
            code: "r1",
            description : course.courseName,
            cost : course.cost,
            discount, 
            amountDue : courseCost
        }
         assert.deepEqual(result, courseCost("r1", cost) );
     });
     it("it should return cost ,for the course code passed in the parameter" , function(){
        
       var result = {
          status : "success",
          code: "r1",
          description : "Ruby on Rails intro",
          cost : 5675.00 ,
          discount: 0, 
          amountDue: 5675
       }
       
        
         assert.deepEqual(result, courseCost('r1','2023-12-31' ) );
     });

    

});