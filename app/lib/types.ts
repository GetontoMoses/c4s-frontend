export type UserRole = 'cfs_admin'|'cfs_staff'|'church_admin'|'pastor'|'finance_officer'|'ministry_leader'|'counselor'|'member'|'donor';
export interface User { id:string; name:string; email:string; role:UserRole; church?:string; initials:string; }
export const ROLE_LABELS: Record<UserRole,string> = {
  cfs_admin:'CFS Super Admin', cfs_staff:'CFS Staff', church_admin:'Church Admin',
  pastor:'Pastor', finance_officer:'Finance Officer', ministry_leader:'Ministry Leader',
  counselor:'Counselor', member:'Church Member', donor:'Donor / Partner',
};
export const ROLE_DASHBOARDS: Record<UserRole,string> = {
  cfs_admin:'/cfs-admin/dashboard', cfs_staff:'/cfs-admin/dashboard',
  church_admin:'/church-admin/dashboard', pastor:'/pastor/dashboard',
  finance_officer:'/finance-officer/dashboard', ministry_leader:'/ministry-leader/dashboard',
  counselor:'/counselor/dashboard', member:'/member/dashboard', donor:'/donor/dashboard',
};
export const DEMO_USERS: Record<string, User & {password:string}> = {
  'admin@cfs.org': { id:'1', name:'Dr. Esther Kamau', email:'admin@cfs.org', role:'cfs_admin', initials:'EK', password:'admin123' },
  'staff@cfs.org': { id:'2', name:'Joseph Mwangi', email:'staff@cfs.org', role:'cfs_staff', initials:'JM', password:'staff123' },
  'churchadmin@nsc.org': { id:'3', name:'Mary Njoroge', email:'churchadmin@nsc.org', role:'church_admin', church:"Nairobi Shepherd's Church", initials:'MN', password:'church123' },
  'pastor@nsc.org': { id:'4', name:'Pastor James Kariuki', email:'pastor@nsc.org', role:'pastor', church:"Nairobi Shepherd's Church", initials:'JK', password:'pastor123' },
  'finance@nsc.org': { id:'5', name:'David Ochieng', email:'finance@nsc.org', role:'finance_officer', church:"Nairobi Shepherd's Church", initials:'DO', password:'finance123' },
  'leader@nsc.org': { id:'6', name:'Grace Waweru', email:'leader@nsc.org', role:'ministry_leader', church:"Nairobi Shepherd's Church", initials:'GW', password:'leader123' },
  'counselor@cfs.org': { id:'7', name:'Dr. Ruth Achieng', email:'counselor@cfs.org', role:'counselor', initials:'RA', password:'counsel123' },
  'member@nsc.org': { id:'8', name:'Samuel Kipchoge', email:'member@nsc.org', role:'member', church:"Nairobi Shepherd's Church", initials:'SK', password:'member123' },
  'donor@org.ke': { id:'9', name:'Peter Mutua', email:'donor@org.ke', role:'donor', initials:'PM', password:'donor123' },
};
