
const CongressCutieModel = Backbone.Model.extend({
})

const CongressCutieCollection = Backbone.Collection.extend({
	initialize: function(qryStrParams){
		if(typeof qryStrParams !== 'undefined'){
			this.url = `${this.url}&${qryStrParams}`
		}
	},
	
	parse: function(rawServerRes){
		console.log('parsing Response!!')
		return rawServerRes.results
	},
	
	url: 'https://congress.api.sunlightfoundation.com/legislators?callback=?',
	
	model: CongressCutieModel
})