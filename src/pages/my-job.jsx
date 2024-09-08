import CreatedAppliactions from '@/components/created-Applications';
import CreatedJobs from '@/components/created-jobs';
import { useUser } from '@clerk/clerk-react';
import React from 'react'
import { BarLoader } from 'react-spinners';

const Myjob = () => {
  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#01bf71" />;
  }


  return (
    <div>
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
      {user?.unsafeMetadata?.role === "candidate" ? "My Applications" : "My Jobs"}
    </h1>
    {user?.unsafeMetadata?.role === "candidate" ? <CreatedAppliactions /> : <CreatedJobs />}
    </div>
  )
}

export default Myjob