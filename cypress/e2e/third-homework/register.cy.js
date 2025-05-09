describe("Register users for config file", ()=>{
   it("register to first site", ()=>{
      cy.register({ url: "https://qauto.forstudy.space/", name: "Tom", lastName: "Ball", email: "qwerty@gmail.com", password: "nBZCa8!ST5WfBHC"});
   });
   it("register to second site", ()=>{
      cy.register({ url: "https://qauto2.forstudy.space/", name: "Tom", lastName: "Ball", email: "qwerty@gmail.com", password: "nBZCa8!ST5WfBHC"});
   });
});