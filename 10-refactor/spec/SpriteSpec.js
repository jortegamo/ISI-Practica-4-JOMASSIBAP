describe ("Clase SpriteSpec",function(){

var canvas, ctx;

        beforeEach(function(){
                loadFixtures('index.html');

                canvas = $('#game')[0];
                expect(canvas).toExist();

                ctx = canvas.getContext('2d');
                expect(ctx).toBeDefined();
        });


	it("Sprite.merge", function(){

		var board = new Sprite();

		 board.merge({c1: '2', c2: '4'});

         expect(board['c1']).toBe('2');
         expect(board['c2']).toBe('4');

	});


});
