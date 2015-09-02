var f  = new sh.Formal();
var utils = new sh.StringUtils();
describe('Formal', function(){
	it('should say Hello "something"', function(){
		expect(f.hello('World')).toEqual('Hello World');
	});
	
	it('should return the length of a string', function(){
		expect(utils.gimmeLength("Bonza!")).toEqual('"Bonza!" has 6 characters');
	})
});