
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isAdmin = false, isLoading: isAdminLoading} =  useQuery({

        queryKey: [user?.email, 'isadmin'],
        enabled: !loading && !!user?.email,
        initialData: false,
        queryFn: async() =>{

            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);

            return res.data?.admin;
        }


    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;