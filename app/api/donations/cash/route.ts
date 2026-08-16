import {rupeesToPaise} from '@/lib/money';
export async function POST(request:Request){try{const form=await request.formData();const amount=rupeesToPaise(form.get('amount'));return Response.json({receiptNumber:`GMC-2026-${Date.now()}`,amount,payment_method:'CASH',status:'VERIFIED'})}catch{return Response.json({error:'Invalid cash donation'}, {status:400})}}
