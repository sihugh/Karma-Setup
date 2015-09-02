module sh{
	export class Formal {
		hello(greeting: string){
			if(!greeting){
				greeting = " ";
			} 
			return "Hello " + greeting;
		}		
	}
}