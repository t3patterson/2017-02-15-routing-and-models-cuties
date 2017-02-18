# Backbone Router Warmup

###Task
Use Backbone Router to create routes for:

- `''` (root path) All congress persons
- `state/:st` : legislators by state
- `gender/:gendr`  :legislators by gender
- `party/:prty/gender/:gen` : legislators by party + gender
- `congressperson/:id` : legislators by id


It should fetch and render the following UI for each congress person:

```
<div class="profile-card">
	<img src="http://flathash.com/«bioguide_id»">
	<h5>
		«first name»</br>
		<small>«state»</small>
	</h5>
</div>
```

Batteries included (script tags `app.js` and for backbone and its dependencies are loaded in `index.html` )
