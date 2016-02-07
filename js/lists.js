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
		that.newItemDesc = ko.observable();
		
		that.toDoList = ko.observableArray();
		that.doneList = ko.observableArray();
		
		that.addListItems = function(){
			that.toDoList.push({name:that.newItem(), desc:that.newItemDesc()});
			localStorage.setItem('toDoList', that.toDoList());
			localStorage.setItem('doneList', that.doneList());
		}
		
		that.removeListItems = function(list){
			that.toDoList.remove(this);
			that.doneList.remove(this);
			//Update Local storage
			localStorage.setItem('toDoList', JSON.Stringify(that.toDoList()));
			localStorage.setItem('doneList', that.doneList());
		}
		
		that.markAsDone = function(){
			that.doneList.push(this);
			that.toDoList.remove(this);
		}
		
		that.markAsNotDone = function(){
			that.toDoList.push(this);
			that.doneList.remove(this);
		}
	},
	eventBindings:function(){
		$('#addNewItemsForm').submit(function(){
			$('input', this).val('');
		});
	}
}
