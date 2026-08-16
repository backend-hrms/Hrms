export async function GET(){return new Response('report,amount\nDemo Collection,1001\n',{headers:{'content-type':'text/csv','content-disposition':'attachment; filename="gcm-report.csv"'}})}
