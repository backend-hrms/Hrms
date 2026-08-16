insert into mandals(name,address,contact_number,festival_year) values ('Demo Ganpati Mandal','Mangal Murti Chowk, Pune','+91 98765 43210',2026);
-- Demo dataset generators: 100 donors, 150 donations, 20 expenses, 10 withdrawals. Clearly marked for non-production use.
with m as (select id from mandals where name='Demo Ganpati Mandal' limit 1)
insert into donors(mandal_id,full_name,mobile,email,address)
select m.id,'Demo Donor '||g,'90000'||lpad(g::text,5,'0'),'donor'||g||'@example.test','Demo address' from generate_series(1,100) g,m;
with m as (select id from mandals limit 1), d as (select id,full_name,mobile,row_number() over() rn from donors limit 100)
insert into donations(mandal_id,donor_id,receipt_number,amount,payment_method,payment_provider,payment_id,transaction_id,status,donor_name_snapshot,donor_mobile_snapshot,created_at,verified_at)
select m.id,d.id,'GMC-2026-'||lpad(g::text,6,'0'),(array[101,501,1001,2001,751])[1+(g%5)],case when g%4=0 then 'CASH' else 'UPI' end,'DEVELOPMENT_MOCK','demo_pay_'||g,'demo_txn_'||g,case when g%13=0 then 'PENDING'::donation_status else 'VERIFIED'::donation_status end,d.full_name,d.mobile,now()-(g||' days')::interval,case when g%13=0 then null else now() end from generate_series(1,150) g join d on d.rn=1+((g-1)%100),m;
with m as (select id from mandals limit 1) insert into expenses(mandal_id,title,category,amount,description) select m.id,'Demo Expense '||g,(array['Decoration','Sound System','Lighting','Prasad','Flowers','Puja Material','Transport','Security','Cleaning','Printing','Permissions','Other'])[1+(g%12)],1000+(g*100),'Demo mode expense' from generate_series(1,20) g,m;
with m as (select id from mandals limit 1) insert into withdrawals(mandal_id,amount,purpose,status,created_at) select m.id,500+(g*100),'Demo withdrawal '||g,(array['REQUESTED','APPROVED','COMPLETED','REJECTED'])[1+(g%4)]::withdrawal_status,now()-(g||' days')::interval from generate_series(1,10) g,m;
