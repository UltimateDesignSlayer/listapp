var lists = lists || {};

lists = {
	init:function(){
		var that = this;
		that.eventBindings();
		
		ko.applyBindings(new this.vmList());
	},
	vmList:function(){
		var that = this;
	
		that.listTitle = "List";
		that.newItem = ko.observable();
		
		that.toDoList = ko.observableArray([
			{name: "crap"},
			{name: "whyy"}
		]);
		that.doneList = ko.observableArray();
		
		that.addListItems = function(){
			that.toDoList.push({name:that.newItem()});
		}
	},
	eventBindings:function(){
		$('#addNewItemsForm').submit(function(){
			$('input', this).val('');
		});
	}
}
