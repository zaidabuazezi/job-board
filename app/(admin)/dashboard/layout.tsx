import AdminSidebar from "@/components/navbar/Adminsidebar";

const AdminLayout=({children}: {children:React.ReactNode}) => {

    return (
        <div className="min-h-screen bg-background flex">
          <AdminSidebar/>
          <main className="flex-1 p-8 overflow-hidden">
          {children}
          </main>
        </div>
    )

};


export default AdminLayout;