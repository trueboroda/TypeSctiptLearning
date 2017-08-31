export default class SmartWatch{
	_model: string;
	get model():string{
		return this._model;
	}
	constructor(model:string){
		this._model = model;
	}
}