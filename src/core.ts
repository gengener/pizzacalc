export type Yeast='fresh'|'idy';
export type Recipe={balls:number;ballWeight:number;hydration:number;yeast:Yeast};
export type Result={flour:number;water:number;salt:number;yeast:number;total:number};
export const defaults:Recipe={balls:6,ballWeight:250,hydration:72.5,yeast:'fresh'};
export function calculate(r:Recipe):Result{
  if(!Number.isFinite(r.balls)||!Number.isFinite(r.ballWeight)||!Number.isFinite(r.hydration)||r.balls<1||r.ballWeight<=0||r.hydration<70||r.hydration>75) throw new Error('INVALID_REFERENCE_INPUT');
  const yeastRatio=r.yeast==='fresh'?0.005:0.005/3;
  const total=r.balls*r.ballWeight;
  const flour=total/(1+r.hydration/100+0.02+yeastRatio);
  return {flour,water:flour*r.hydration/100,salt:flour*0.02,yeast:flour*yeastRatio,total};
}
export function encode(r:Recipe){return new URLSearchParams({v:'1',ref:'bosco-canotto-24h-v1',b:String(r.balls),w:String(r.ballWeight),h:String(r.hydration),y:r.yeast}).toString()}
export function decode(q:string):Recipe|null{const p=new URLSearchParams(q);if(p.get('v')!=='1'||p.get('ref')!=='bosco-canotto-24h-v1')return null;const r={balls:Number(p.get('b')),ballWeight:Number(p.get('w')),hydration:Number(p.get('h')),yeast:p.get('y')==='idy'?'idy':'fresh'} as Recipe;try{calculate(r);return r}catch{return null}}
