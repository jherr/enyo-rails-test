enyo.kind({
name: "App",
	kind: "FittableColumns",
	classes: "enyo-fit",
setupItem: function(inSender, inEvent) {
    this.$.name.setContent("Foo");
},
itemTap: function(inSender, inEvent) {
    alert("You tapped on row: " + inEvent.index);
},
	components: [
		{kind: "FittableRows", style: "width: 20%;", components: [
		    {kind: "List", fit: true, count: 10, onSetupItem: "setupItem", components: [
		        {classes: "item", ontap: "itemTap", components: [
		            {name: "name"}
		        ]}
		    ]},
			{fit: true},
			{kind: "onyx.Toolbar", components: [
				{kind: "onyx.Button", content: "1"}
			]}
		]},
		{kind: "FittableRows", style: "width: 20%;", classes: "fittable-sample-shadow", components: [
			{fit: true, style: ""},
			{kind: "onyx.Toolbar", components: [
				{kind: "onyx.Button", content: "2"}
			]}
		]},
		{kind: "FittableRows", fit: true, classes: "fittable-sample-shadow", components: [
			{fit: true, classes: "fittable-sample-fitting-color"},
			{kind: "onyx.Toolbar", components: [
				{kind: "onyx.Button", content: "3"}
			]}
		]}
	]
});
