module sh{
	export class StringUtils{
		gimmeLength(text: string){
			return '"' + text + '" has ' + text.length + ' characters';
		}
	}
}