import { createFeatureSelector, createSelector, createReducer, on } from '@ngrx/store';
//import { Category } from 'app/products/product';
import { Category} from '../../Animals/animal';
import * as AppState from '../../state/app.state';
import { initialState } from './animal.state';
import { AnimalState } from './animal.state';


// Selector functions
const getAnimalFeatureState = createFeatureSelector<AnimalState>('animals');

export const getCurrentAnimalId = createSelector(
  getAnimalFeatureState,
  state => state.currentAnimalId
);

export const getCurrentAnimal = createSelector(
  getAnimalFeatureState,
  getCurrentAnimalId,
  (state, currentAnimalId) => {

    if (currentAnimalId === 0) {
      return {
        id:0,
        name:'',
        category:Category.domestic,
        price:0,
        image:'',
        rating:1,
        qty:0
      };
    } else {
      return currentAnimalId ? state.animals.find(p => p.id === currentAnimalId) : null;
    }
  }
);

export const getAnimals = createSelector(
  getAnimalFeatureState,
  state => state.animals
);

export const getError = createSelector(
  getAnimalFeatureState,
  state => state.error
);