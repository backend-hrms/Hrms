import {transactions} from '@/lib/demo-data';import {AdminLayout,TransactionTable} from '@/components/ui';
export default function Transactions(){return <AdminLayout><h1>Immutable Transaction Ledger</h1><p className="notice">Financial records are never hard-deleted. Corrections are reversals with actor, timestamp and reason in audit_logs.</p><TransactionTable rows={transactions}/></AdminLayout>}
