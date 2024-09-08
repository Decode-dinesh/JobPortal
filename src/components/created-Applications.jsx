import { getApplications } from '@/api/apiApplication';
import useFetch from '@/hooks/use-fetch';
import { useUser } from '@clerk/clerk-react';
import React, { useEffect } from 'react'
import { BarLoader } from 'react-spinners';
import ApplicationCard from './application-card';

const CreatedAppliactions = () => {
  const { user } = useUser();

  const {
    fn: fnApplications,
    data: applications,
    loading: loadingApplications,
  } = useFetch(getApplications,{
    user_id : user.id
  });

  useEffect(() => {
    fnApplications();
  }, []);

  if (!loadingApplications) {
    return <BarLoader className="mb-4" width={"100%"} color="#01bf71" />;
  }

  return (
    <div className='flex flex-col gap-2'>
        {applications?.map((application) => {
            return (
              <ApplicationCard key={application.id} application={application} isCandidate />
            );
          })}
    </div>
  )
}

export default CreatedAppliactions