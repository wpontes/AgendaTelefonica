
$(document).ready(function() {

	var Contact = Backbone.Model.extend({

		default: {
			name: '',
			phone: ''
		}

	});

	var ListContacts = Backbone.Collection.extend({

		model: Contact

	});
	
	var ViewContact = Backbone.View.extend({

		template: _.template($('#tpl-list').html()),

		events: {
			'submit form': 'add'
		},

		initialize: function(){

			this.newListContact = new ListContacts([]);

			this.render();

		},

		render: function(){
			
			var that = this;

			$(this.el).find('.listContact').html(this.template(that.newListContact));

		},

		add: function(obj){

			var name = $('#name'),
				phone = $('#phone');

			this.newListContact.add({name: name.val(), phone: phone.val()});

			name.val('');
			phone.val('');

			this.render();

			return false;

		}

	});

	var list_contact = new ViewContact({ el: $('.container')});

});
