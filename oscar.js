exports.bonjour = function(){
  echo( 'Bonjour');
};

exports.neige = function() {
  box(blocks.snow,1,1,1)
	.up()
	.box(blocks.snow,1,1,1)
	.up()
	.box(blocks.pumpkin,1,1,1);
};

exports.train = function() {
	down(2).box(0,16,5,16)
	for (i = 0; i < 15; i++) { 
	  	fwd(i)
		.box(blocks.wood,1,1,1)
		.right()
		.box(blocks.glowstone,1,1,1)
		.left().up()
		.box(blocks.rail,1,1,1)
	}
	for (i = 0; i < 15; i++) { 
	  	fwd(14).right(i+1)
		.box(blocks.wood,1,1,1)
		.fwd(-1)
		.box(blocks.glowstone,1,1,1)
		.fwd().up()
		.box(blocks.rail,1,1,1)
	}
	for (i = 0; i < 14; i++) { 
	  	right(15).fwd(i)
		.box(blocks.wood,1,1,1)
		.left()
		.box(blocks.glowstone,1,1,1)
		.right().up()
		.box(blocks.rail,1,1,1)
	}
	for (i = 0; i < 14; i++) { 
	  	right(i+1)
		.box(blocks.wood,1,1,1)
		.fwd(1)
		.box(blocks.glowstone,1,1,1)
		.fwd(-1).up()
		.box(blocks.rail,1,1,1)
	}

};
