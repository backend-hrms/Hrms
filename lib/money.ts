export const formatINR=(paise:number)=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(paise/100);
export function rupeesToPaise(value:FormDataEntryValue|null){const n=Number(value); if(!Number.isFinite(n)||n<1) throw new Error('Invalid amount'); return Math.round(n*100)}
