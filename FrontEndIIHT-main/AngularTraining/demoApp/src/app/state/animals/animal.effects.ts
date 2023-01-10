import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AnimalService } from '../../shared/animal.service';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AnimalActions from './animal.actions';

@Injectable()
export class AnimalEffects {

  constructor(private actions$: Actions, private animalService: AnimalService) { }

  loadAnimals$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AnimalActions.loadAnimals),
        mergeMap(() => this.animalService.getAnimals()
          .pipe(
            map(animals => AnimalActions.loadAnimalsSuccess({ animals })),
            catchError(error => of(AnimalActions.loadAnimalsFailure({ error })))
          )
        )
      );
  });

  updateAnimal$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AnimalActions.updateAnimal),
        concatMap(action =>
          this.animalService.updateAnimal(action.animal)
            .pipe(
              map(animal => AnimalActions.updateAnimalSuccess({ animal })),
              catchError(error => of(AnimalActions.updateAnimalFailure({ error })))
            )
        )
      );
  });

  createAnimal$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AnimalActions.createAnimal),
        concatMap(action =>
          this.animalService.createAnimal(action.animal)
            .pipe(
              map(animal => AnimalActions.createAnimalSuccess({ animal })),
              catchError(error => of(AnimalActions.createAnimalFailure({ error })))
            )
        )
      );
  });

  deleteAnimal$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AnimalActions.deleteAnimal),
        mergeMap(action =>
          this.animalService.deleteAnimal(action.AnimalId).pipe(
            map(() => AnimalActions.deleteAnimalSuccess({ AnimalId: action.AnimalId })),
            catchError(error => of(AnimalActions.deleteAnimalFailure({ error })))
          )
        )
      );
  });
}