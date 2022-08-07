import React from 'react'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

type Props = {}

const User = (props: Props) => {
	const router = useRouter();

	const logOut=() =>{
		localStorage.removeItem("User");
		toast.success("Đăng xuất thành công @@")
		  router.push('/auth/login')
	}
    

    if(typeof window !== 'undefined') {
        if (localStorage.getItem('User')) {
		const userLocal = JSON.parse(localStorage.getItem('User') || "");

		console.log("user",userLocal.user.name);
          // return (
          //   <>{userLocal.user.name}</>
          //   )

        }
	}
  

  return (
    <svg
    className="fill-current hover:text-black"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
>
    <circle fill="none" cx={12} cy={7} r={3} />
    <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
    </svg>

  )



}



export default User