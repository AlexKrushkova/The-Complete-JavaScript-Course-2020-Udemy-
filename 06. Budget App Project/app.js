var budgetController = (function(){
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };


   var data = {
       allItems: {
           exp: [],
           icn: []
       },
       totals: {
           exp: 0,
           inc: 0
       }
   };

   return {
       addItem: function(type, des, val){
            var newItem, ID;
            
            //Create new ID
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length -1].id +1;
            }
            else{
                ID = 0;
            }
         

            // Create new item based on 'inc' or 'exp' type
            if (type === exp){
                newItem = new Expense(ID, des, val);
            }
            else if (type === 'inc'){
                newItem = new Income(ID, des, val);
            }

            //Push it into our data structure
            data.allItems[type].push(newItem);

            //Return the new element
            return newItem;

       }
   };

})();



var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addBtn = '.add__btn',
    }

    return {
        getInput: function(){
            return{
                 type: document.querySelector(DOMstrings.inputType).value,
                 description: document.querySelector(DOMstrings.inputDescription).value,
                 value: document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstrings: function(){
            returnDomStrings
        }
    };

})();

var appController = (function(budgetCtrl, UICtrl){

    var setUpEventListeners = function(){
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOMStrings.addBtn).addEventListener('click', ctrlAddItem);       

        document.addEventListener('keypress', function(event){
           if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    };



    var ctrlAddItem = function(){
        var input, newItem;
 
        // 1. Get the field input data
        input = UICtrl.getInput();

        // 2. Add item to the budget controller 
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add the new item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    };

    return {
        init: function(){
            setUpEventListeners();
        }
    };
    
})(budgetController, UIController);

appController.init();
