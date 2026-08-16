import {donations} from '@/lib/demo-data';import {AdminLayout,DonationTable,SearchBar,DateFilter} from '@/components/ui';
export default function Donors(){return <AdminLayout><h1>Donor Management</h1><SearchBar/><DateFilter/><DonationTable rows={donations.slice(0,30)}/></AdminLayout>}
