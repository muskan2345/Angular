import { Animal } from '../../Animals/animal';
import * as AppState from '../../state/app.state';
// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.


export interface State extends AppState.State {
  animals: AnimalState;
}
export interface AnimalState{
  currentAnimalId:number | null;
  animals:Animal[];
  error:string;
}

export const initialState:AnimalState={
  currentAnimalId:null,
  animals:[],
  error:''
}