import {describe,expect,it} from 'vitest';
import {calculate,decode,defaults,encode,initialRecipe} from './core';

describe('practice reference',()=>{
  it('preserves target mass',()=>{
    const x=calculate(defaults);
    expect(x.flour+x.water+x.salt+x.yeast).toBeCloseTo(x.total,10);
  });
  it('uses 0.5% fresh yeast for the source value',()=>{
    const x=calculate({...defaults,yeast:'fresh'});
    expect(x.yeast/x.flour).toBeCloseTo(.005,10);
  });
  it('uses only declared 3:1 IDY approximation',()=>{
    const x=calculate({...defaults,yeast:'idy'});
    expect(x.yeast/x.flour).toBeCloseTo(.005/3,10);
  });
  it('rejects hydration outside reference',()=>expect(()=>calculate({...defaults,hydration:76})).toThrow('INVALID_REFERENCE_INPUT'));
  it('round-trips the versioned recipe',()=>expect(decode(encode(defaults))).toEqual(defaults));
  it('rejects unknown reference versions',()=>expect(decode('v=2&ref=other')).toBeNull());
});

describe('initial yeast selection',()=>{
  it('uses instant dry yeast on a virgin page',()=>expect(initialRecipe('',null).yeast).toBe('idy'));
  it('preserves a saved fresh-yeast selection',()=>expect(initialRecipe('','fresh').yeast).toBe('fresh'));
  it('lets a recipe link override the saved selection',()=>{
    const linked={...defaults,yeast:'fresh' as const};
    expect(initialRecipe(`?${encode(linked)}`,'idy')).toEqual(linked);
  });
});
