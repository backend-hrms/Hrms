import type {Role} from '@/types/domain';
export const rolePermissions:Record<Role,string[]>={SUPER_ADMIN:['*'],COLLECTION_MANAGER:['donors:read','cash:create','donations:verify','receipts:create'],ACCOUNT_MANAGER:['collections:read','expenses:create','withdrawals:create','uploads:create','reports:read'],VIEWER:['dashboard:read']};
export function requirePermission(role:Role,permission:string){return rolePermissions[role].includes('*')||rolePermissions[role].includes(permission)}
