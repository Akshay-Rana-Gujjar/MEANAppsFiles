var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
	title: {type:String, required:'{PATH} is required!'},
	featured: {type:Boolean, required:'{PATH} is required!'},
	published: {type:Date, required:'{PATH} is required!'},
	tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
	Course.find({}).exec(function(err,collection){
		if(collection.length === 0) {
			Course.create({title: 'C# for Sociopaths #1', featured: true, published: new Date('2014-02-01'), tags: ['C#']});
			Course.create({title: 'C# for Sociopaths #2', featured: true, published: new Date('2014-03-01'), tags: ['C#']});
			Course.create({title: 'C# for Sociopaths #3', featured: true, published: new Date('2013-04-01'), tags: ['C#']});
			Course.create({title: 'C# for Sociopaths #4', featured: true, published: new Date('2014-09-01'), tags: ['JS']});
			Course.create({title: 'C# for Sociopaths #5', featured: false, published: new Date('2014-07-01'), tags: ['Coding']});
			Course.create({title: 'C# for Sociopaths #6', featured: true, published: new Date('2014-01-01'), tags: ['Misc']});
			Course.create({title: 'C# for Sociopaths #7', featured: true, published: new Date('2014-05-01'), tags: ['Management']});
			Course.create({title: 'C# for Sociopaths #8', featured: false, published: new Date('2014-08-01'), tags: ['Coding']});
			Course.create({title: 'C# for Sociopaths #9', featured: true, published: new Date('2014-07-01'), tags: ['Misc']});
			Course.create({title: 'C# for Sociopaths #10', featured: false, published: new Date('2014-03-01'), tags: ['C#','Misc']});
			Course.create({title: 'C# for Sociopaths #11', featured: true, published: new Date('2014-09-01'), tags: ['C#','Coding']});
			Course.create({title: 'C# for Sociopaths #12', featured: true, published: new Date('2014-05-01'), tags: ['C#','Managment']});
		}
	});
}

exports.createDefaultCourses = createDefaultCourses;